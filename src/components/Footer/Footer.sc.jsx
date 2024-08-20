import { Container } from "../Container/styles";
import { Btn, FooterBlock, Form, Input, Link, Links, Text, Title, Wrapper } from "./styles";
import { useForm } from "react-hook-form";

const Footer = () => {

  const {register, formState: {errors}, handleSubmit} = useForm()

  const submit = (data) => {
    console.log(data)
  }

  const error = (event) => {
    console.log(event)
  }

  return (
    <FooterBlock>
      <Container>
        <Wrapper>
          <div>
            <Title>О магазине</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</Text>
          </div>
          <div>
            <Title>Категории</Title>
            <Links>
              <Link>часы</Link>
              <Link>браслеты</Link>
              <Link>ремни</Link>
              <Link>ювелирные изделия</Link>
              <Link>запонки</Link>
            </Links>
          </div>
          <div>
            <Title>Рассылка</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</Text>
            <Form onSubmit={handleSubmit(submit, error)}>
              <Input {...register('email', {required: true})} type="text" 
              aria-invalid={errors.email ? true : false}
              placeholder="Ваша почта"/>
              <Btn type="submit">ПОДПИСАТЬСЯ</Btn>
            </Form>
          </div>
        </Wrapper>
      </Container>
    </FooterBlock>
  );
}

export default Footer;