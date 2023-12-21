<?php

namespace App\Controller;

use App\Entity\Habitant;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HabitantController extends AbstractController
{
    #[Route('/habitants', name: 'add_habitant', methods: ['POST'])]
    public function add(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $habitant = new Habitant();
        $habitant->setNom($data['nom']);
        $habitant->setPrenom($data['prenom']);
        $habitant->setDateNaissance(new \DateTime($data['dateNaissance']));
        $habitant->setGenre($data['genre']);
        $habitant->setNumero($data['numero']);
        $habitant->setNomRue($data['nomRue']);

        $entityManager->persist($habitant);
        $entityManager->flush();

        return new JsonResponse(['status' => 'Habitant créé'], Response::HTTP_CREATED);
    }

    #[Route('/habitants/{id}', name: 'update_habitant', methods: ['PUT'])]
    public function update($id, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $habitant = $entityManager->getRepository(Habitant::class)->find($id);

        if (!$habitant) {
            return new JsonResponse(['status' => 'Habitant non trouvé'], Response::HTTP_NOT_FOUND);
        }

        $habitant->setNom($data['nom']);
        $habitant->setPrenom($data['prenom']);
        $habitant->setDateNaissance(new \DateTime($data['dateNaissance']));
        $habitant->setGenre($data['genre']);
        $habitant->setNumero($data['numero']);
        $habitant->setNomRue($data['nomRue']);

        $entityManager->flush();

        return new JsonResponse(['status' => 'Habitant mis à jour'], Response::HTTP_OK);
    }

    #[Route('/habitants/{id}', name: 'delete_habitant', methods: ['DELETE'])]
    public function delete($id, EntityManagerInterface $entityManager): JsonResponse
    {
        $habitant = $entityManager->getRepository(Habitant::class)->find($id);

        if (!$habitant) {
            return new JsonResponse(['status' => 'Habitant non trouvé'], Response::HTTP_NOT_FOUND);
        }

        $entityManager->remove($habitant);
        $entityManager->flush();

        return new JsonResponse(['status' => 'Habitant supprimé'], Response::HTTP_OK);
    }

    #[Route('/habitants', name: 'list_habitants', methods: ['GET'])]
    public function list(EntityManagerInterface $entityManager): JsonResponse
    {
        $habitants = $entityManager->getRepository(Habitant::class)->findAll();

        $habitantsArray = [];
        foreach ($habitants as $habitant) {
            $habitantsArray[] = [
                'id' => $habitant->getId(),
                'nom' => $habitant->getNom(),
                'prenom' => $habitant->getPrenom(),
                'dateNaissance' => $habitant->getDateNaissance()->format('Y-m-d'),
                'genre' => $habitant->getGenre(),
                'numero' => $habitant->getNumero(),
                'nomRue' => $habitant->getNomRue(),
            ];
        }
        return new JsonResponse($habitantsArray, Response::HTTP_OK);
    }

    #[Route('/habitants/search', name: 'search_habitant_by_address', methods: ['POST'])]
    public function searchByAddress(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $habitants = $entityManager->getRepository(Habitant::class)->findBy(['numero' => $data['numero'], 'nomRue' => $data['nomRue']]);

        $habitantsArray = [];
        foreach ($habitants as $habitant) {
            $habitantsArray[] = [
                'id' => $habitant->getId(),
                'nom' => $habitant->getNom(),
                'prenom' => $habitant->getPrenom(),
                'dateNaissance' => $habitant->getDateNaissance()->format('Y-m-d'),
                'genre' => $habitant->getGenre(),
                'numero' => $habitant->getNumero(),
                'nomRue' => $habitant->getNomRue(),
            ];
        }

        return new JsonResponse($habitantsArray, Response::HTTP_OK);
    }
}
