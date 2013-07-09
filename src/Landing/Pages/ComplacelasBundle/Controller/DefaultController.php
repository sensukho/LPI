<?php

namespace Landing\Pages\ComplacelasBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($country)
    {
        return $this->render('LandingPagesComplacelasBundle:Default:index.html.twig', array('country' => $country));
    }
}
