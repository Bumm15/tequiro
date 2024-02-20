import { doc, setDoc } from 'firebase/firestore';
import { storage } from '../firebaseConfig';
import emailjs from '@emailjs/browser';


export async function sendVerificationEmail(email) {
  const verificationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code
      
    // Store the verification code and user's email in Firestore
    await setDoc(doc(storage, 'verificationCodes', email), {
        email: email,
        code: verificationCode,
        timestamp: new Date()
    });

    // zaloguju content emailu a automaticky pošlu email 
    emailjs.send('service_l8jb86v', 'template_sxhv9pe', {
      verificationCode: verificationCode,
      to: email
    },
    {
      publicKey: 'hAVRhcM-AwTt8ANrj',
    }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
}
