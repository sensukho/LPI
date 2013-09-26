<?php

namespace Landing\Pages\Todosganan\Site\SubscribeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('LandingPagesTodosgananSiteSubscribeBundle:Default:index.html.twig', array('name' => $name));
    }
}
