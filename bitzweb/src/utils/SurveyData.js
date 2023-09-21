export const schema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  title: "Sign up form",
  description: "Welcome to Bitzweb Careers, Please fill the form to apply",
  properties: {
    name: {
      type: "string",
      minLength: 8,
      maxLength: 80,
      title: "Full Name",
      attrs: {
        placeholder: "Your Full Name",
        title: "Please enter your full name"
      }
    },
    email: {
      type: "string",
      maxLength: 120,
      title: "Email",
      attrs: {
        type: "email",
        placeholder: "Your Email"
      },
    },
    frontendLanguage: {
      type: "string",
      title: "Frontend Language",
      enum: ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"],
      attrs: {
        placeholder: "Select your frontend language"
      }
    },
    agree: {
      type: "boolean",
      title: "Agree",
      description: "You agree to receive occasional updates and special offers for vue-json-schema updates.",
      default: false,
      attrs: {
        type: "checkbox"
      }
    }
  },
  additionalProperties: false,
  required: ["name", "email", "frontendLanguage"]
};

  
