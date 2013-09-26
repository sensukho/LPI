<?php

namespace Landing\Pages\Todosganan\Site\RewardsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('LandingPagesTodosgananSiteRewardsBundle:Default:index.html.twig', array('name' => $name));
    }
}
