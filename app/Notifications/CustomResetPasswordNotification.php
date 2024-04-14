<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Notifications\Messages\MailMessage;

class CustomResetPasswordNotification extends ResetPasswordNotification
{
    public function toMail($notifiable)
    {$url = url('http://localhost:3001/ResetPassword',
    //      [
    //     'email' => $notifiable->email,
    //     'token' => $this->token,
    // ]
);

    $expires = now()->addMinutes(config('auth.passwords.users.expire'))->getTimestamp();
    $url .= "?expires={$expires}&token={$this->token}&email={$notifiable->email}";

    return (new MailMessage)
        ->subject('Custom Subject: Reset your password')
        ->line('Custom line 1: You are receiving this email because we received a password reset request for your account.')
        ->action('Reset Password',  $url)
        ->line('Custom line 2: This password reset link will expire in 60 minutes.')
        ->line('Custom line 3: If you did not request a password reset, no further action is required.');

    }
}





// namespace App\Notifications;

// use Illuminate\Bus\Queueable;
// use Illuminate\Contracts\Queue\ShouldQueue;
// use Illuminate\Notifications\Messages\MailMessage;
// use Illuminate\Notifications\Notification;



// class CustomResetPasswordNotification extends Notification
//  {


//     use Queueable;

//     /**
//      * Create a new notification instance.
//      */
//     public function __construct()
//     {
//         //
//     }

//     /**
//      * Get the notification's delivery channels.
//      *
//      * @return array<int, string>
//      */
//     public function via(object $notifiable): array
//     {
//         return ['mail'];
//     }

//     /**
//      * Get the mail representation of the notification.
//      */
//     public function toMail(object $notifiable): MailMessage
//     {
//         return (new MailMessage)
//                     ->line('The introduction to the notification.')
//                     ->action('Notification Action', url('/'))
//                     ->line('Thank you for using our application!');
//     }

//     /**
//      * Get the array representation of the notification.
//      *
//      * @return array<string, mixed>
//      */
//     public function toArray(object $notifiable): array
//     {
//         return [
//             //
//         ];
//     }
//}
