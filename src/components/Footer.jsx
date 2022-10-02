import React from 'react';
import { useFormik } from 'formik';
import { formSchema } from '../schemas';
import FooterBG from '../assets/bg-footer-squiggle.svg';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Footer = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: formSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className='py-16'>
      <img src={FooterBG} alt='Footer Background' className='mx-auto' />
      <div className='max-w-[1120px] mx-auto flex flex-col items-center justify-center space-y-5 md:space-y-0 mt-[-50px] md:mt-[-100px]'>
        <h2 className='text-whiteColor text-[24px] font-extrabold max-w-xs md:max-w-md text-center md:mb-5'>Get notified when we launch</h2>
        <form onSubmit={handleSubmit} className='flex w-full flex-col px-10 md:flex-row items-start justify-center md:space-x-5'>
          <div className='flex flex-col items-start mb-3 w-full md:space-y-3 md:mb-0 md:max-w-[350px]'>
            <input value={values.email} onChange={handleChange} id='email' type='email' placeholder='Email address' onBlur={handleBlur} className={errors.email && touched.email ? 'input-error' : 'input-normal'} />
            {errors.email && touched.email && <p className='text-pinkColor text-[15px] ml-5'>{errors.email}</p>}
          </div>
          <button disabled={isSubmitting} type='submit' className='bg-tealColor text-blueColor py-3 px-4 w-full rounded-full text-[15px] font-extrabold h-[50px] md:max-w-[150px] hover:bg-transparent hover:border hover:border-[tealColor] hover:text-whiteColor hover:ease-in duration-150 cursor-pointer'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
