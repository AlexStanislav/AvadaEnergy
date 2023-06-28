<template>
  <div class="contact-form">
    <h1>Solicita o oferta estimativa</h1>
    <div class="personal-content">
      <span v-for="(formInput, index) of formValues.personalInfo" :key="index">
        <InputText
          :id="formInput.label"
          v-model="formInput.value"
          :placeholder="formInput.label"
        />
      </span>
    </div>
    <div class="project-content">
      <span
        v-for="(formInput, index) of formValues.projectInfo"
        :key="index"
        :class="formInput.class"
      >
        <InputText
          :id="formInput.label"
          v-model="formInput.value"
          :placeholder="formInput.label"
        />
      </span>
    </div>
    <div class="details-content">
      <div class="budget-wrapper">
        <label for="budget-input">Buget - lei</label>
        <div class="input-wrapper-budget">
          <InputText id="budget-input" v-model.number="budget" class="w-full" />
          <Slider v-model="budget" :min="1000" :max="10000" />
        </div>
      </div>
      <div class="term-wrapper">
        <label for="term-input">Termeni instalare</label>
        <select
          class="term-select"
          id="term-input"
          v-model="formValues.selectedTerm"
          placeholder="Alege Termen"
        >
          <option v-for="(term, index) of terms" :key="index">
            {{ term }}
          </option>
        </select>
      </div>
    </div>
    <span class="p-float-label">
      <Textarea
        v-model="textAreaValue"
        :rows="isMobile ? 5 : 2"
        :cols="isMobile ? 33 : 50"
      />
      <label>Alte detalii</label>
    </span>
    <vue-recaptcha sitekey="6LdS-80mAAAAALt9sLQEBqdA0HubKwMuPk5cXOWr" @verify="onVerify"></vue-recaptcha>
    <Button label="Trimite" @click="sendData()" />

    <Toast />
  </div>
</template>
<script setup>
import InputText from "primevue/inputtext";
import Slider from "primevue/slider";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import axios from "axios";
import Toast from "primevue/toast";
import { computed, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { VueRecaptcha } from 'vue-recaptcha';

const toast = useToast();

let budget = ref(1000);
let terms = ref(["Imediat", "3 luni", "6 luni", "9 luni", "1 an"]);

let recaptcha = null;

let textAreaValue = ref("");
let formValues = ref({
  personalInfo: [
    {
      label: "Nume",
      value: "",
    },
    {
      label: "Companie (optional)",
      value: "",
    },
    {
      label: "Email",
      value: "",
    },
    {
      label: "Telefon",
      value: "",
    },
  ],
  projectInfo: [
    {
      label: "Localitate",
      value: "",
      class: "",
    },
    {
      label: "Judet",
      value: "",
      class: "",
    },
    {
      label: "Adresa instalare",
      value: "",
      class: "address-input",
    },
  ],
  selectedTerm: "",
});

let isMobile = computed(() => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
});

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : window.location.origin;


function onVerify(event) {
  recaptcha = event;
}

function sendData() {
  let formData = {
    name: formValues.value.personalInfo[0].value,
    email: formValues.value.personalInfo[2].value,
    phone: formValues.value.personalInfo[3].value,
    city: formValues.value.projectInfo[0].value,
    state: formValues.value.projectInfo[1].value,
    address: formValues.value.projectInfo[2].value,
    budget: budget.value,
    term: formValues.value.selectedTerm.value || "Imediat",
    company: formValues.value.personalInfo[1].value,
    message: textAreaValue.value,
  };

  let noValueError = false;

  console.log(formData);

  //TODO Uncomment this

  // for (const field in formData) {
  //   if (field !== "company") {
  //     if (field !== "message") {
  //       if (formData[field] === "") {
  //         noValueError = true;
  //       }
  //     } else {
  //       formData[field] = "Gol";
  //     }
  //   }else{
  //     if (formData[field] === "") {
  //       formData[field] = "Gol";
  //     }
  //   }
  // }

  // if(recaptcha === null){
  //   toast.add({
  //     severity: "error",
  //     summary: "Atentie",
  //     detail: "Recaptcha is required"
  //   })
  // }else{
  //   formData['captcha'] = recaptcha
  //   if (noValueError) {
  //     toast.add({
  //       severity: "error",
  //       summary: "Atentie",
  //       detail:
  //         "Toate campurile in afara de Companie si Alte detalii sunt obligatorii",
  //       life: 3000,
  //     });
  //   } else {
  //     console.log(formData);
  //     axios.post(`${url}/newClient`, formData).then((res) => {
  //       if (res.status === 200) {
  //         toast.add({
  //           severity: "success",
  //           summary: "Success",
  //           detail: "Mesajul a fost trimis",
  //           life: 3000,
  //         });
  //       }
  //     });
  //   }
  // }
}




//TODO Figure out which is better
// function sendMail() {
//   let form = new FormData();

//   if (
//     formValues.personalInfo[0].value != "" &&
//     formValues.personalInfo[1].value != "" &&
//     formValues.personalInfo[2].value != "" &&
//     formValues.personalInfo[3].value != ""
//   ) {
//     form.append(
//       "first_name",
//       formValues.personalInfo[0].value.replace(/(<([^>]+)>)/gi, "")
//     );
//     form.append(
//       "email",
//       formValues.personalInfo[2].value.replace(/(<([^>]+)>)/gi, "")
//     );
//     form.append(
//       "phone_number",
//       formValues.personalInfo[3].value.replace(/(<([^>]+)>)/gi, "")
//     );
//     form.append(
//       "address",
//       formValues.projectInfo[0].value.replace(/(<([^>]+)>)/gi, "")
//     );
//   } else {
//     toast.add({
//       severity: "error",
//       summary: "Eroare",
//       detail: "Va rugam completati datele personale",
//       life: 3000,
//     });
//   }

//   if (
//     formValues.projectInfo[1].value != "" &&
//     formValues.projectInfo[2].value != ""
//   ) {
//     form.append(
//       "city",
//       formValues.projectInfo[1].value.replace(/(<([^>]+)>)/gi, "")
//     );
//     form.append(
//       "state",
//       formValues.projectInfo[2].value.replace(/(<([^>]+)>)/gi, "")
//     );
//   } else {
//     toast.add({
//       severity: "error",
//       summary: "Eroare",
//       detail: "Va un judet si o localitate",
//       life: 3000,
//     });
//   }

//   if (
//     formValues.projectInfo[0].value != "" &&
//     formValues.projectInfo[1].value != ""
//   ) {
//     form.append(
//       "address",
//       formValues.projectInfo[0].value.replace(/(<([^>]+)>)/gi, "")
//     );
//   } else {
//     toast.add({
//       severity: "error",
//       summary: "Eroare",
//       detail: "Va rugam introduceti o adresa",
//       life: 3000,
//     });
//   }

//   if (formValues.selectedTerm != "") {
//     form.append(
//       "project_term",
//       formValues.selectedTerm.replace(/(<([^>]+)>)/gi, "")
//     );
//   } else {
//     toast.add({
//       severity: "error",
//       summary: "Eroare",
//       detail: "Va rugam selectati un termen",
//       life: 3000,
//     });
//   }

//   console.log(form);
//   if (!isFormDataEmpty(form)) {
//     form.append("project_budget", budget.value);
//     form.append(
//       "project_description",
//       textAreaValue.value.replace(/(<([^>]+)>)/gi, "")
//     );
//     // axios
//     //   .post("https://fotovoltaiceongrid.ro/wp-admin/admin-ajax.php", form, {
//     //     headers: {
//     //       "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
//     //     },
//     //   })
//     //   .then((response) => {
//     //     console.log(response.data);
//     //   })
//     //   .catch((error) => {
//     //     toast.add({ severity: 'error', summary: 'Erroare', detail: 'Ceva nu a mers, va rugam mai incercati odata.', life: 3000 });
//     //     console.error(error);
//     //   });
//     toast.add({
//       severity: "success",
//       summary: "Mail trimis",
//       detail: "Mail-ul a fost trimis cu succes!",
//       life: 3000,
//     });
//   } else {
//     toast.add({
//       severity: "error",
//       summary: "Eroare",
//       detail: "Va rugam completati datele",
//       life: 3000,
//     });
//   }
// }
// function isFormDataEmpty(formData) {
//   const entries = formData.entries();
//   return entries.next().done; // Returns true if there are no entries
// }
</script>
<style>
.contact-form {
  width: 500px;
  padding: 2rem;
  box-sizing: content-box;
  border-radius: var(--border-radius);
  background: #fff;
  box-shadow: var(--box-shadow);
  color: var(--accent);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 1rem;
  margin-left: 10rem;
}

.contact-form h1 {
  text-align: center;
  color: var(--accent);
  margin: 0;
}

.input-wrapper {
  display: flex;
  flex-flow: column wrap;
  gap: 0.2rem;
}

.personal-content {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
}

.project-content {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
  margin: 0;
}

.address-input input {
  width: calc(500px - 2rem) !important;
}

.input-wrapper-budget {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 2rem;
}

.budget-wrapper {
  width: 90% !important;
  display: flex;
  flex-flow: column wrap;
}

.input-wrapper-budget {
  height: 70px;
}

#budget-input {
  width: 70px !important;
}

.input-wrapper-budget .p-slider {
  width: 50%;
}

.input-wrapper-budget .p-slider-horizontal {
  height: 0.7rem !important;
  background: var(--main);
}

.p-slider .p-slider-range {
  background: var(--accent) !important;
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
  background: var(--main) !important;
  border-color: var(--accent) !important;
}

.details-content {
  width: 98%;
  display: flex;
  justify-content: center;
}

.term-wrapper {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

.term-select {
  margin: 0.7rem 0;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
}

.p-inputtextarea {
  resize: none;
}

.p-button {
  width: 100%;
  background: var(--accent) !important;
  border: 1px solid var(--accent) !important;
}

.p-inputtext::placeholder {
  color: #737373;
  opacity: 1;
}

@media screen and (max-width: 1366px) {
  .contact-form {
    padding: 1rem !important;
    gap: 0.5rem !important;
    margin-top: 4rem;
  }
}
@media screen and (max-width: 1024px) {
  .contact-form-wrapper {
    justify-content: center !important;
  }
}

@media screen and (max-width: 414px) and (orientation: portrait),
  screen and (max-width: 915px) and (orientation: landscape) {
  .home {
    display: flex;
    flex-flow: column wrap;
  }

  .home-contact {
    height: 140vh !important;
  }

  .contact-wrapper h2 {
    display: none;
  }

  .contact-form-wrapper {
    width: 100%;
    height: fit-content !important;
    padding: 0 !important;
    padding: 3rem 0 !important;
  }
  .contact-form-wrapper .p-button {
    width: 90%;
    margin: 1rem 0;
  }

  .contact-form {
    width: 90% !important;
    margin: auto;
    gap: 0.5rem !important;
    padding: 2rem 0 !important;
    display: flex !important;
    flex-flow: column wrap !important;
    align-items: center !important;
    justify-content: flex-start !important;
    margin-top: 5rem;
  }

  .contact-form h1 {
    font-size: 2rem;
  }

  .contact-form .p-button {
    width: 90%;
  }

  .personal-content {
    width: 90%;
  }

  .project-content {
    width: 90% !important;
  }
  .project-content .p-inputtext {
    width: 100%;
  }

  .details-content {
    width: 90%;
    flex-flow: column wrap !important;
  }
  .p-inputtextarea {
    width: 95% !important;
    margin-left: 2.5%;
  }

  .address-input input {
    width: 95% !important;
  }
}

@media screen and (max-width: 915px) and (orientation: landscape) {
  .contact-form {
    padding: 1rem;
    width: 60%;
    background: var(--light);
    color: var(--dark);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
  }

  .contact-form h1 {
    text-align: center;
    color: var(--accent);
  }

  .personal-content,
  .project-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>