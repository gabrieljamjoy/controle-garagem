const firebaseConfig = {
  apiKey: "AIzaSyA6L5UCuz2zlNkIg-UrViq7KHoiBpWJv7E",
  authDomain: "controle-de-garagem.firebaseapp.com",
  projectId: "controle-de-garagem",
  storageBucket: "controle-de-garagem.firebasestorage.app",
  messagingSenderId: "1061306843396",
  appId: "1:1061306843396:web:0a4c1c53e3e480bf0ed051"
};
// ESSAS LINHAS ABAIXO SÃO OBRIGATÓRIAS:
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
