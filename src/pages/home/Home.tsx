import { FormattedMessage } from 'react-intl';
import { Button } from '../../components/shared/button/Button';
import { TextInput } from '../../components/shared/textInput/TextInput';
import { Radio } from '../../components/shared/radio/Radio';
import { QuantityButton } from '../../components/shared/quantityButton/QuantityButton';
import { CategoryCard } from '../../components/shared/categoryCard/CategoryCard';
import categoryimg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import categoryimg3 from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import categoryimg2 from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      Home
      <Button variant="primary" id="btn_see_product_label" />
      <br />
      <Button variant="secondary" id="btn_see_product_label" />
      <br />
      <Button variant="link" id="btn_shop_label" />
      <br />
      <br />
      <TextInput
        label="form_testing_label"
        id="testing"
        isError={false}
        placeholder="form_testing_placeholder"
      />
      <br />
      <br />
      <FormattedMessage id="GREETING" values={{ name: 'Carlos' }} />
      <br />
      <br />
      <Radio label="radio_label_example" value="prueba" />
      <br />
      <br />
      <br />
      <QuantityButton children={(counter) => console.log(counter)} />
      <br />
      <br />
      <QuantityButton children={(counter) => console.log(counter)} />
      <br />
      <br />
      <CategoryCard category="HEADPHONES" productImg={categoryimg} />
      <br />
      <br />
      <CategoryCard category="SPEAKERS" productImg={categoryimg2} />
      <br />
      <br />
      <CategoryCard category="EARPHONES" productImg={categoryimg3} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
