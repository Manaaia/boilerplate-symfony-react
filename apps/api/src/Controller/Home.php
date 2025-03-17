<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class Home
{
    #[Route('/', methods: ['GET'])]
    public function getWelcome(): Response
    {
        return new Response('Hello World! 🌍<br/> This is the Symfony API and it is up and running as it should. Well done and happy coding!');
    }
}
