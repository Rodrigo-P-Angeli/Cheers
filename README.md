# Cheers
### Projeto Cheers

<img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FCheersPic%2FWhatsApp%20Image%202020-08-25%20at%2011.27.10%20(1).jpeg?alt=media&token=c7347b12-9033-4ffb-b136-5bc05a51e308" height="400"/> <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FCheersPic%2FWhatsApp%20Image%202020-08-25%20at%2011.27.10%20(5).jpeg?alt=media&token=037d5e8c-e517-4374-94b1-3f734c0d60e4" height="400"/> <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FCheersPic%2FWhatsApp%20Image%202020-08-25%20at%2011.27.10%20(4).jpeg?alt=media&token=1a34728a-67f6-4e07-9f0a-49ba6466c740" height="400"/> <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FCheersPic%2FWhatsApp%20Image%202020-08-25%20at%2011.27.10.jpeg?alt=media&token=313fe79e-c001-449d-8cfb-19d94a29b462" height="400"/> <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FCheersPic%2FWhatsApp%20Image%202020-08-25%20at%2011.27.10%20(3).jpeg?alt=media&token=f1dbdaca-24ca-4b0b-9925-d9cbb53ec0bd" height="400"/> <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FCheersPic%2FWhatsApp%20Image%202020-08-25%20at%2011.27.10%20(2).jpeg?alt=media&token=8105e8cf-b2f8-46a6-be0b-e07bcc589167" height="400"/> 

Antes de tudo, um breve recado sobre minha trajetória na programação em React Native. Comecei a criar App em React Native na primeira semana de abril do ano de 2020 quando se iniciou a quarentena e estava em casa sem emprego e nada para fazer. Então hoje fazem aproximados 4 meses que desde que comecei. Como sou formado em engenharia mecânica, nunca havia estudado a fundo uma linguagem de programação, então antes disso não sabia nada de JavaScript, Node.js, Firebase, etc. Então todo conhecimento que tenho foram adquiridos nestes 4 meses, logo o App pode não parecer profissional e claro, é possível fazer muito melhor do que está agora pois não estou inserido no mercado e trabalhando diretamente com isso para saber quais as melhores práticas para a criação de App. Isso também é favorável para que eu seja moldado junto as boas práticas de programação da empresa por ser um programador novo é mais fácil para eu me adaptar. 

### How to install
**It's a _React Native_ project**

 - To execute the project just download and extract the .zip
 - Inside the folder via console, run 'npm i' to install the project's dependencies.
 - Emulate an android device or an iOs device on your computer, I usually use only [Android Studio] (https://developer.android.com/studio#downloads).
 - After installing all dependencies and opening the emulator, run 'npx react-native run-android' for android and 'react-native run-ios' for iOS.
 - After the build it might occure a bug in Android Studio with the build in which when the app opens the screen is all white and the app is not loaded. Just close the application processes on the emulator and open it again and the app will load correctly.

### How the App works:

The App loads a SplashScreen where it seeks for a current User, if no user it navigates to log in screen, otherwise it loads the menu, every item is saved on Firebase back-end which is loaded as well. The user can place an order but he will need to set his address to be able to send his order, so the app navigates to set the user's address. After that, he is able to check his order and send to the seller so on. 

The User has screen where he can check for old orders and his points in the loyalty plan. 

I already have the seller App, where you can check for every users orders but the UI and the security aren't ready yet so the code is private still. But it will be open as soon as possible.

