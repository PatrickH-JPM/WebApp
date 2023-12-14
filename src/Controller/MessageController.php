<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessageController extends AbstractController
{
    #[Route('/message', name: 'app_message')]
    public function index(): Response
    {
        return $this->render('message/index.html.twig', [
            'controller_name' => 'MessageController',
        ]);
    }
    #[Route('/messages', name: 'get_messages')]
    public function getMessages() : JsonResponse
    {
        // Tableau de messages
        $messages = [
            'Bonjour',
            'Salut, bienvenue sur notre site !',
            'Hello ?',
            'Hi?'
        ];

        // Retourner les messages sous forme de réponse JSON
        return new JsonResponse($messages);
    }
}
