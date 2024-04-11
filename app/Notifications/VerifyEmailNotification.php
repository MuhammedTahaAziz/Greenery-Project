<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\URL;

class VerifyEmailNotification extends VerifyEmail
{
    protected $hash;

    public function __construct($hash,$id)
    {
        $this->hash = $hash;
        $this->id=$id;
    }

    public function toMail($notifiable)
    {
      
    
        $url = URL::temporarySignedRoute(
            'register', // name of the route to redirect to
            now()->addMinutes(60), // expiration time for the signed URL
            ['hash' => $this->hash, 'id' => $this->id]  // parameters to include in the URL
        );



      //  $url = url("/email/verify/{$this->hash}/{$this->id}");// aw linkaya ka detawa    lanaw emailakaya  

        return (new \Illuminate\Notifications\Messages\MailMessage)
            ->subject('Verify your email address')// subjecte emailaka 
            ->line('Please click the button below to verify your email address.') // pesh butnakaya am nwsena 
            ->action('Verify Email', $url)//  awa butne naw emailakaya 
            ->line('If you did not create an account, no further action is required.');// la zher butnakaya 
    }
}
