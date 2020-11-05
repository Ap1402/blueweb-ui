import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group controlId="contactForm.ControlInputName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" required />
        <Form.Control.Feedback type="invalid">
          Nombre Requerido
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="contactForm.ControlInputEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="nombre@gmail.com" required />
        <Form.Control.Feedback type="invalid">
          Correo inválido
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="contactForm.ControlInputPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su teléfono" required />
        <Form.Control.Feedback type="invalid">
          Telefóno inválido
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="contactForm.ControlReason">
        <Form.Label>Razón</Form.Label>
        <Form.Control as="select">
          <option value="averia">Avería</option>
          <option value="duda">Duda</option>
          <option value="factibilidad">Pregunta sobre factibilidad</option>
          <option value="otros">Otros</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Razón inválida
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="contactForm.ControlInputMessage">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} required />
        <Form.Control.Feedback type="invalid">
          Mensaje Requerido
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" size="lg" block type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;
