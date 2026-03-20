body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(135deg, #7b6cf6, #a66cff);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
}

.container {
  padding: 20px;
}

.calculadora {
  background: #1e1e2f;
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

#display {
  height: 80px;
  color: white;
  font-size: 32px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
}

.botoes {
  display: grid;
  grid-template-columns: repeat(4, 70px);
  gap: 15px;
}

button {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  color: white;
  background: #2a2a3d;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  transform: scale(1.1);
}

/* Botões especiais */
.roxo {
  background: #7b6cf6;
}

.cinza {
  background: #3a3a4f;
}

