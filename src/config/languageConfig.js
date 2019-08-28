const language = () => {
  let language = window.navigator.language;

  const languagePt = {
    browserTitle: {
      customers: 'Clientes | Início',
      details: 'Clientes | Detalhes',
      titleRegister: 'Clientes | Cadastro',
    },
    pageTitle: {
      customers: 'Clientes',
      details: 'Detalhes do cliente',
      register: 'Cadastrar cliente',
    },
    dataCustomerTitle: {
      id: 'ID',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      birth: 'Data de nascimento',
      cpf: 'CPF',
      profission: 'Profissão',
    },
    btn: {
      delete: 'Excluir',
      edit: 'Editar',
      register: 'Cadastrar',
    },
  };

  const languageEn = {
    browserTitle: {
      customers: 'Customers | Home',
      details: 'Customers | Details',
      titleRegister: 'Customers | Register',
    },
    pageTitle: {
      customers: 'Customers',
      details: 'Customers details',
      register: 'Register customer',
    },
    dataCustomerTitle: {
      id: 'ID',
      firstName: 'First name',
      lastName: 'Last name',
      birth: 'Date of birth',
      cpf: 'CPF',
      profission: 'Profission',
    },
    btn: {
      delete: 'Delete',
      edit: 'Edit',
      register: 'Cadastrar',
    },
  };

  if (language === 'pt-BR') {
    language = languagePt;
  } else {
    language = languageEn;
  }

  return language;
};

export default language;
