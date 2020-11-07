<?php
  require 'vendor/autoload.php';
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('2a3963ea3c3f0e8bfe856715021774e0','d4633d0e74044c85afd8090e02a2bb82',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "streetso71@gmail.com",
          'Name' => "Ty"
        ],
        'To' => [
          [
            'Email' => "streetso71@gmail.com",
            'Name' => "Ty"
          ]
        ],
        'Subject' => "Welcome Aboard!",
        'TextPart' => "My first Mailjet email",
        'HTMLPart' => "<h3>Dear Ty, welcome to <a href='localhost/practice_sites/testemail/confirmation.html'>Our Site</a>!</h3><br />",
        'CustomID' => "AppGettingStartedTest"
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success() && var_dump($response->getData());
?>
