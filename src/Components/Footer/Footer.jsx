import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <h2 style={styles.title}>Transportadora Conforte</h2>
          <p style={styles.text}>A confiança que você precisa para o seu transporte.</p>
        </div>
        <div style={styles.info}>
          <p style={styles.text}>© {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#22286e',
    color: '#fff',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  text: {
    fontSize: '14px',
    margin: '5px 0',
  },
  info: {
    marginTop: '10px',
  },
};

export default Footer;
