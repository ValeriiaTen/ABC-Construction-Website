import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import {
  Container,
  FlexCol,
  Container2,
  FlexCol2,
  Img,
  FlexText,
  Form,
} from './Services.style.jsx';

class Services extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: '25px' }}>
          <ImageGallery />
        </div>
        <Container>
          <FlexCol>Remodel a newly purchased home</FlexCol>
          <FlexCol>Complete home renovation</FlexCol>
          <FlexCol>Kitchen Remodeling</FlexCol>
          <FlexCol>Bathroom Remodeling</FlexCol>
          <FlexCol>Interior design</FlexCol>
          <FlexCol>Basement Finishing & Waterproofing</FlexCol>
          <FlexCol>Additions</FlexCol>
          <FlexCol>Office remodeling</FlexCol>
        </Container>
        <Container2>
          <FlexCol2>
            <Img
              src={'./Images/Moscow1.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </FlexCol2>
          <FlexText>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </FlexText>
          <FlexText>
            1914 translation by H. Rackham "But I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?"
          </FlexText>
          <FlexCol2>
            <Img
              src={'./Images/Moscow1.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </FlexCol2>
          <FlexCol2>
            <Img
              src={'./Images/Moscow1.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </FlexCol2>
          <FlexText>
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio. Nam libero tempore,
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus
            id quod maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat."
          </FlexText>
          <FlexText>
            1914 translation by H. Rackham "On the other hand, we denounce with
            righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desire, that they cannot foresee the pain and trouble that are bound
            to ensue; and equal blame belongs to those who fail in their duty
            through weakness of will, which is the same as saying through
            shrinking from toil and pain. These cases are perfectly simple and
            easy to distinguish. In a free hour, when our power of choice is
            untrammelled and when nothing prevents our being able to do what we
            like best, every pleasure is to be welcomed and every pain avoided.
            But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have
            to be repudiated and annoyances accepted. The wise man therefore
            always holds in these matters to this principle of selection: he
            rejects pleasures to secure other greater pleasures, or else he
            endures pains to avoid worse pains."
          </FlexText>
          <FlexCol2>
            <Img
              src={'./Images/Moscow1.png'}
              alt="First slide"
              style={{ width: '100%' }}
            />
          </FlexCol2>
        </Container2>

        {/* <div>
          <Form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">
                Example multiple select
              </label>
              <select
                multiple
                class="form-control"
                id="exampleFormControlSelect2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </Form>
        </div> */}
        <div></div>
      </div>
    );
  }
}

export default Services;
