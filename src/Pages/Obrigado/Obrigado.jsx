function Obrigado() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>✅ Mensagem enviada com sucesso!</h1>
          <p style={styles.text}>
            Agradecemos pelo seu contato. Em breve nossa equipe entrará em contato com você.
          </p>
          <a href="/" style={styles.button}>Voltar para o início</a>
        </div>
      </div>
    );
  }
  
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#22286e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      maxWidth: "500px",
      width: "100%",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      color: "#2e7d32",
      marginBottom: "20px",
    },
    text: {
      fontSize: "18px",
      color: "#333",
      marginBottom: "30px",
    },
    button: {
      display: "inline-block",
      padding: "12px 24px",
      backgroundColor: "#2e7d32",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "6px",
      transition: "background-color 0.3s ease",
    },
  };
  
  export default Obrigado;
  