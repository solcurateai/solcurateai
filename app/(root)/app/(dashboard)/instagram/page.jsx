"use client"
import FormField from '@/components/FormField';
import GenerateContentCard from '@/components/GenerateContentCard';
import PostForm from '@/components/PostForm';
import { Button } from '@/components/ui/button';
import React, {useState} from 'react'

const FormItem = () => {
    const [formData, setFormData] = useState({
        username: '',
        bio: '',
        country: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    return (
        <form onSubmit={handleSubmit} className="p-4 grid grid-cols-2 gap-x-10">

    <FormField
        label="Target Audience"
        id="audience"
        placeholder="Enter your target audience"
        value={formData.audience}
        onChange={handleChange}
      />

    <FormField
        label="Tone (optional)"
        id="tone"
        placeholder="Select"
        as="select"
        value={formData.country}
        onChange={handleChange}
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
        label="Content Description"
        id="description"
        placeholder="Provide any additional information for the post."
        as="textarea"
        value={formData.info}
        onChange={handleChange}
      />
    
    <FormField
        label="Writing Style Guidelines (optional)"
        id="styleGuidelines"
        placeholder="Writing Style Guidelines"
        as="textarea"
        value={formData.styleGuidelines}
        onChange={handleChange}
      />

    <FormField
        label="Call-to-Action (optional)"
        id="callToAction"
        placeholder="What action should the audience take?"
        value={formData.callToAction}
        onChange={handleChange}
    />

    <FormField
        label="Keywords & Hashtags (optional)"
        id="keywords"
        placeholder='e.g. "Digital Marketing, SEO", "Machine Learning, AI", "Remote Work, Productivity", "Sustainability, Green Energy", "Leadership, Management"'
        value={formData.keywords}
        onChange={handleChange}
    />

    <FormField
        label="Caption Length"
        id="captionLength"
        placeholder="Select"
        as="select"
        value={formData.captionLength}
        onChange={handleChange}
        options={[
          { value: 'Brief and punchy', label: 'Brief and punchy' },
          { value: 'Detailed and narrative-driven', label: 'Detailed and narrative-driven' },
          
        ]}
      />
    
    <FormField
        label="Copywriting Framework (optional)"
        id="framework"
        placeholder="Select"
        as="select"
        value={formData.framework}
        onChange={handleChange}
        options={[
          { value: 'yes', label: 'AIDA (Attention Interest Desire Action)' },
          { value: 'no', label: 'NPAS (Problem Agitate Solution)o' },
          { value: 'no', label: 'FAB (Features Advantages Benefits)' },
          { value: 'no', label: '4Cs (Clear Concise Compelling Credible)' },
          { value: 'no', label: '3Ps (Promise Picture Prove Push)' },
          { value: 'no', label: 'QUEST (Qualify Understand Educate Stimulate Transition)' },
          { value: 'no', label: 'SOV (Story Offer Value)' },
        ]}
      />

<FormField
        label="Example Reference (optional)"
        id="reference"
        placeholder="Provide any example reference"
        as="textarea"
        value={formData.reference}
        onChange={handleChange}
      />

<FormField
        label="Additional Information (optional)"
        id="info"
        placeholder="Provide any additional information for the post."
        as="textarea"
        value={formData.info}
        onChange={handleChange}
      />

    <FormField
        label="Use Emojis?"
        id="emojis"
        placeholder="Select"
        as="select"
        value={formData.emojis}
        onChange={handleChange}
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
        value={formData.language}
        onChange={handleChange}
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

const InstagramCaption = () => {
    const [activeTab, setActiveTab] = useState('form');
    
    const TabsLayout = () => {
        switch(activeTab) {
            case 'form':
                return <PostForm content={<FormItem />} />
            case 'content':
                return <GenerateContentCard />
            default:
                return <PostForm />
        }
    }
  return (
    <section className="gap-4 px-4">
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="font-clash text-white text-[40px] font-semibold">Instagram Caption Generation</h1>
        <p className="font-semibold text-2xl w-[800px] text-black-4 font-quicksand">Create captivating Instagram captions that resonate with your audience and boost engagement.</p>
      </div>
      <div className="my-6">
        <div className="flex gap-4">
            <div className="flex items-center justify-start gap-4">
            <div className={`${activeTab === 'form'? 'main-gradient text-white' : 'bg-black-4 text-[#FEFEFE]'} w-8 h-6 rounded-full font-semibold items-center flex justify-center`}>
                    <p>1</p>
                </div>
                <button className={`text-xl font-semibold ${activeTab === 'form'? 'main-gradient font-semibold bg-clip-text text-black-700' : ' text-black-4'}`} onClick={() => setActiveTab('form')}>Complete the Form</button>
            </div>
            <div className="flex items-center justify-start gap-4">
                <div className={`${activeTab === 'content'? 'main-gradient text-white' : 'bg-black-4 text-[#FEFEFE]'} w-8 h-6 rounded-full font-semibold items-center flex justify-center`}>
                    <p>2</p>
                </div>
                <button className={`text-xl font-semibold ${activeTab === 'content'? 'main-gradient bg-clip-text text-black-700' : ' text-black-4'}`} onClick={() => setActiveTab('content')}>Generated Content</button>
            </div>
        </div>
        <div className="my-4">
            <TabsLayout />
        </div>
        
      </div>
    </section>
  )
}

export default InstagramCaption