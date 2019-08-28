const language = () => {
  let language = window.navigator.language;

  const languagePt = {
    browserTitle: {
      customers: "Clientes | Início",
      details: "Clientes | Detalhes",
      register: "Clientes | Cadastro"
    },
    pageTitle: {
      customers: "Clientes",
      details: "Detalhes do cliente",
      register: "Cadastrar cliente"
    },
    dataCustomerTitle: {
      id: "ID",
      firstName: "Nome",
      lastName: "Sobrenome",
      birth: "Data de nascimento",
      cpf: "CPF",
      profission: "Profissão"
    },
    btn: {
      delete: "Excluir",
      edit: "Editar",
      register: "Cadastrar",
      confirm: "Yes",
      cancel: "No"
    },
    messageInvalidField: {
      firstName: "Nome inválido",
      lastName: "Sobrenome inválido",
      birth: "Data inválida",
      cpf: "CPF inválido",
      profission: "Profissão"
    },
    messageEmptyField: {
      firstName: "Digite o nome",
      lastName: "Digite o sobrenome",
      birth: "Digite a data de nascimento",
      cpf: "Digite o CPF",
      profission: "Selecione uma profissão"
    },
    deleteMessage: "Tem certeza que deseja excluir este cliente?",
    profissionsSelect: "Selecione",
    profissions: [
      {
        value: 1,
        text: "Programador"
      },
      {
        value: 2,
        text: "Analista"
      },
      {
        value: 3,
        text: "Gerente"
      },
      {
        value: 4,
        text: "Estagiário"
      },
      {
        value: 5,
        text: "QA"
      }
    ]
  };

  const languageEn = {
    browserTitle: {
      customers: "Customers | Home",
      details: "Customers | Details",
      register: "Customers | Register"
    },
    pageTitle: {
      customers: "Customers",
      details: "Customer details",
      register: "Register customer"
    },
    dataCustomerTitle: {
      id: "ID",
      firstName: "First name",
      lastName: "Last name",
      birth: "Date of birth",
      cpf: "CPF",
      profission: "Profission"
    },
    btn: {
      delete: "Delete",
      edit: "Edit",
      register: "Register",
      confirm: "Yes",
      cancel: "No"
    },
    messageInvalidField: {
      firstName: "invalid first name",
      lastName: "Invalid last name",
      birth: "Invalid date",
      cpf: "Invalid CPF"
    },
    messageEmptyField: {
      firstName: "Enter first name",
      lastName: "Enter last name",
      birth: "Enter date of birth",
      cpf: "Enter CPF",
      profission: "Select a profession"
    },
    deleteMessage: "Are you sure you want to delete this client?",
    profissionsSelect: "Select",
    profissions: [
      {
        value: 1,
        text: "Programmer"
      },
      {
        value: 2,
        text: "Analyst"
      },
      {
        value: 3,
        text: "Manager"
      },
      {
        value: 4,
        text: "Trainee"
      },
      {
        value: 5,
        text: "QA"
      }
    ]
  };

  if (language === "pt-BR") {
    language = languagePt;
  } else {
    language = languageEn;
  }

  return language;
};

export default language;
