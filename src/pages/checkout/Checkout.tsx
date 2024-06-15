import { useForm } from 'react-hook-form';
import { Button, TextInput, Radio, ProductDetails } from '../../components';
import { useIntl } from 'react-intl';
import { useCartContext } from '../../hooks/useCartContext';
import { useModalContext } from '../../hooks/useModalContext';
import { ModalActionTypes } from '../../context/modal/modalActions';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../../schemas/checkout.schema';

export const Checkout = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(checkoutSchema),
  });
  const { items, totalOfAllProducts } = useCartContext();
  const { handleOpenModal } = useModalContext();
  const { formatMessage, formatNumber } = useIntl();
  const navegate = useNavigate();
  const onSubmit = () => {
    handleOpenModal(ModalActionTypes.OPEN_ORDER);
  };
  return (
    <div className="bg-customAlmostWhite flex flex-col items-center mx-auto">
      <div className=" flex flex-col lg:gap-9 max-w-[1110px] py-4 px-6 sm:py-12 sm:px-10 lg:py-[80px]">
        <button
          onClick={() => navegate(-1)}
          className="text-left body opacity-50 mb-6 self-start hover:text-primary"
        >
          Go Back
        </button>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 lg:flex-row"
        >
          <div className="bg-white p-6 w-full flex flex-col gap-8 rounded-lg sm:max-w-[689px]">
            <h2 className="h4-bold">CHECKOUT</h2>
            <div className="">
              {/* remove mb */}
              <div className="flex flex-col gap-4 mb-7">
                <h2 className=" uppercase subtitle-bold-1px text-primary">
                  {formatMessage({ id: 'form_header_billing' })}
                </h2>
                <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
                  <TextInput
                    label="form_input_name"
                    placeholder="form_input_name_placeholder"
                    inputName="name"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                  <TextInput
                    label="form_input_email"
                    placeholder="form_input_email_placeholder"
                    inputName="email"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                  <TextInput
                    label="form_input_phone"
                    placeholder="form_input_phone_placeholder"
                    inputName="phone"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-7 ">
                <h2 className=" uppercase subtitle-bold-1px text-primary">
                  {formatMessage({ id: 'form_header_shipping' })}
                </h2>
                <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:[&>*:nth-child(1)]:col-span-2">
                  <TextInput
                    label="form_input_address"
                    placeholder="form_input_address_placeholder"
                    inputName="address"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                  <TextInput
                    label="form_input_zip"
                    placeholder="form_input_zip_placeholder"
                    inputName="zip"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                  <TextInput
                    label="form_input_city"
                    placeholder="form_input_city_placeholder"
                    inputName="city"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                  <TextInput
                    label="form_input_country"
                    placeholder="form_input_country_placeholder"
                    inputName="country"
                    isError={formState.errors['name']?.message}
                    register={register}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-7">
                <h2 className="uppercase subtitle-bold-1px text-primary">
                  {formatMessage({ id: 'form_header_payment' })}
                </h2>
                <div className="flex flex-col gap-5 sm:flex-row sm:grid sm:grid-cols-2">
                  <p className="small-bold">
                    {formatMessage({ id: 'form_input_payment' })}
                  </p>
                  <div className="flex flex-col gap-6">
                    <Radio
                      label="form_input_payment_money"
                      name="payment"
                      register={register}
                      value="e-money"
                    />
                    <Radio
                      label="form_input_payment_cash"
                      name="payment"
                      register={register}
                      value="cash"
                    />
                  </div>
                  {watch('payment') === 'e-money' && (
                    <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:col-span-2 ">
                      <TextInput
                        label="form_input_payment_e_money"
                        placeholder="form_input_payment_e_money_placeholder"
                        inputName="e_money"
                        isError={formState.errors['e_money']?.message}
                        register={register}
                      />
                      <TextInput
                        label="form_input_payment_money_e_money_pin"
                        placeholder="form_input_payment_money_e_money_pin_placeholder"
                        inputName="e_money_pin"
                        isError={formState.errors['e_money_pin']?.message}
                        register={register}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6  w-full flex flex-col gap-8 rounded-lg sm:max-w-[689px] lg:max-w-[350px]">
            <h2 className="h4-bold">SUMMARY</h2>
            <div className="flex flex-col gap-8">
              {items.map(
                ({ name, image: { mobile }, totalPrice, quantity }) => (
                  <div className="flex items-center justify-between" key={name}>
                    <ProductDetails
                      name={name}
                      img={mobile}
                      totalPrice={totalPrice}
                    />
                    <p className="body opacity-50">x{quantity}</p>
                  </div>
                )
              )}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="body opacity-50 uppercase">
                      {formatMessage({ id: 'form_summary_total' })}
                    </p>
                    <p className="medium-bold">
                      $ {formatNumber(totalOfAllProducts)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="body opacity-50 uppercase">
                      {formatMessage({ id: 'form_summary_shipping' })}
                    </p>
                    <p className="medium-bold">$ {50}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="body opacity-50 uppercase">
                      {formatMessage({ id: 'form_summary_vat' })}
                    </p>
                    <p className="medium-bold">$ {formatNumber(1079)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="body opacity-50 uppercase">
                    {formatMessage({ id: 'form_summary_grand_total' })}
                  </p>
                  <p className="medium-bold text-primary">
                    $ {formatNumber(totalOfAllProducts + 1079 + 50)}
                  </p>
                </div>
              </div>
              <Button type="submit" variant="primary" id="form_submit_btn" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
