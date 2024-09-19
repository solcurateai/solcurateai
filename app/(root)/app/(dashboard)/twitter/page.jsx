"use client"
import FormField from '@/components/FormField';
import GenerateContentCard from '@/components/GenerateContentCard';
import PostForm from '@/components/PostForm';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const FormItem = () => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = async (formData) => {
    
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="p-4 grid grid-cols-2 gap-x-10">
      <FormField
        label="Content Idea"
        id="contentIdea"
        value=''
        placeholder="Enter your content idea"
        {...register("contentIdea")}
        required
      />

      <FormField
        label="Target Audience"
        id="audience"
        value=''
        placeholder="Enter your target audience"
        {...register("audience")}
        required
      />

      {/* <FormField
        label="Content Type"
        id="contentType"
        placeholder="Select"
        as="select"
        value={formData.country}
        onChange={handleChange}
        options={[
          { value: 'linkedin', label: 'LinkedIn Post' },
          { value: 'instagram', label: 'Instagram Caption' },
          { value: 'facebook', label: 'Facebook Post' },
          { value: 'tweet', label: 'Tweet' },
        ]}
      /> */}

      <FormField
        label="Tone (optional)"
        id="tone"
        placeholder="Select"
        as="select"
        {...register("tone")}
        options={[
          { value: 'casual', label: 'Casual 👋' },
          { value: 'conversational', label: 'Conversational 💬' },
          { value: 'dramatic', label: 'Dramatic 🎭' },
          { value: 'educational', label: 'Educational 🎒' },
          { value: 'exciting', label: 'Exciting 🎊' },
          { value: 'formal', label: 'Formal 🧑‍💼' },
          { value: 'humorous', label: 'Humorous 😂' },
          { value: 'shocking', label: 'Shocking 😱 ' },
        ]}
      />


      <FormField
        label="Tweet Length"
        id="postLength"
        placeholder="Select"
        as="select"
        {...register("postLength")}
        options={[
          { value: '140', label: '140 characters' },
          { value: '280', label: '280 characters' },
          { value: '50', label: '50 words' },
          { value: '100', label: '100 words' },
          { value: '150', label: '150 words' },
          { value: '200', label: '200 words' },
          { value: '300', label: '300 words' },
          { value: '500', label: '500 words' },

        ]}
      />


      <FormField
        label="Use Emojis?"
        id="emojis"
        placeholder="Select"
        as="select"
        {...register("emojis")}
        options={[
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
        ]}
      />

      <FormField
        label="Language"
        id="language"
        placeholder="Select"
        as="select"
        {...register("language")}
        options={[
          { value: 'english', label: 'English' },
          { value: 'français', label: 'Français' },
          { value: 'español', label: 'Español' },
          { value: 'deutsch', label: 'Deutsch' },
          { value: 'italiano', label: 'Italiano' },
        ]}
      />

      <Button
        type="submit"
        className="mt-7 h-[52px] main-gradient hover:bg-yellow-300 text-white p-2 rounded-md"
      >
        Submit
      </Button>
    </form>
  )
}

const TwitterPost = () => {
  const [activeTab, setActiveTab] = useState('form');

  const TabsLayout = () => {
    switch (activeTab) {
      case 'form':
        return <FormItem />
      case 'content':
        return <GenerateContentCard />
      default:
        return <PostForm />
    }
  }

  return (
    <section className="gap-4 px-4">
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="font-clash text-white text-[40px] font-semibold">Twitter (X) Post Generation</h1>
        <p className="font-semibold text-2xl w-[800px] text-black-4 font-quicksand">Compose impactful Twitter posts that cut through the noise and drive meaningful interactions.</p>
      </div>
      <div className="my-6">
        <div className="flex gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className={`${activeTab === 'form' ? 'main-gradient text-white' : 'bg-black-4 text-[#FEFEFE]'} w-8 h-6 rounded-full font-semibold items-center flex justify-center`}>
              <p>1</p>
            </div>
            <button className={`text-xl font-semibold ${activeTab === 'form' ? 'main-gradient font-semibold bg-clip-text text-black-700' : ' text-black-4'}`} onClick={() => setActiveTab('form')}>Complete the Form</button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div className={`${activeTab === 'content' ? 'main-gradient text-white' : 'bg-black-4 text-[#FEFEFE]'} w-8 h-6 rounded-full font-semibold items-center flex justify-center`}>
              <p>2</p>
            </div>
            <button className={`text-xl font-semibold ${activeTab === 'content' ? 'main-gradient bg-clip-text text-black-700' : ' text-black-4'}`} onClick={() => setActiveTab('content')}>Generated Content</button>
          </div>
        </div>
        <div className="my-4">
          <TabsLayout />
        </div>

      </div>
    </section>
  )
}

export default TwitterPost