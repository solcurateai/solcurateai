"use client";
import FormField from "@/components/FormField";
import GenerateContentCard from "@/components/GenerateContentCard";
import PostForm from "@/components/PostForm";
import { Button } from "@/components/ui/button";
import { deductGenerationCount, geminiUrl, HOST } from "@/constants";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FormItem = ({ setActiveTab, setGeneratedText }) => {
  const [formData, setFormData] = useState({
    contentIdea: "",
    audience: "",
    tone: "",
    postLength: "",
    emojis: "",
    language: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { accessToken } = useSelector((state) => state.user);
  const [freeTrialCount, setFreeTrialCount] = useState(0);
  const [version, setVersion] = useState("");

  // Load version and freeTrialCount from localStorage on mount
  useEffect(() => {
    const storedVersion = localStorage.getItem("version");
    const storedCount = parseInt(localStorage.getItem("freeTrialCount") || "0");

    setVersion(storedVersion);
    setFreeTrialCount(storedCount);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);

    const isNotPremium = version !== "premium";

    if (isNotPremium && freeTrialCount === 0) {
      setIsGenerating(false);
      setActiveTab("content");
      setGeneratedText(
        "You've reached your generation limit. Please upgrade to Pro to continue generating content."
      );
      return;
    }

    let geminiContent = {
      contents: [
        {
          parts: [
            {
              text: `You are a social media content creator. Based on the following inputs, generate a tweet for Twitter (X) that meets the specified criteria:  1. Content Idea: ${formData.contentIdea} 2. Target Audience: ${formData.audience} 3. Tone: ${formData.tone} 4. Tweet Length: ${formData.postLength} 5. Use Emojis: ${formData.emojis} 6. Language: ${formData.language}`,
            },
          ],
        },
      ],
    };
    try {
      const response = await fetch(geminiUrl, {
        method: "POST",
        body: JSON.stringify(geminiContent),
      });
      const data = await response.json();

      let responseText = data.candidates[0].content.parts[0].text;

      console.log(responseText);
      setIsGenerating(false);
      setActiveTab("content");
      setGeneratedText(responseText);

      // Only deduct count if user is not premium
      if (isNotPremium) {
        try {
          const response = await fetch(
            `${HOST}/User/Subscribe/DeductGenerationCount`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify({}),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to deduct generation count");
          }

          let updatedCount = freeTrialCount - 1;
          setFreeTrialCount(updatedCount);
          localStorage.setItem("freeTrialCount", updatedCount.toString());
        } catch (error) {
          console.log("Error deducting count", error);
        }
      }
    } catch (error) {
      console.log(error);
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 grid grid-cols-2 gap-x-10">
      <FormField
        label="Content Idea"
        id="contentIdea"
        name="contentIdea"
        placeholder="Enter your content idea"
        value={formData.idea}
        onChange={handleChange}
        required
      />

      <FormField
        label="Target Audience"
        id="audience"
        name="audience"
        placeholder="Enter your target audience"
        value={formData.audience}
        onChange={handleChange}
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
        name="tone"
        placeholder="Select"
        as="select"
        value={formData.tone}
        onChange={handleChange}
        options={[
          { value: "casual", label: "Casual 👋" },
          { value: "conversational", label: "Conversational 💬" },
          { value: "dramatic", label: "Dramatic 🎭" },
          { value: "educational", label: "Educational 🎒" },
          { value: "exciting", label: "Exciting 🎊" },
          { value: "formal", label: "Formal 🧑‍💼" },
          { value: "humorous", label: "Humorous 😂" },
          { value: "shocking", label: "Shocking 😱 " },
        ]}
      />

      <FormField
        label="Tweet Length"
        id="postLength"
        name="postLength"
        placeholder="Select"
        as="select"
        value={formData.postLength}
        onChange={handleChange}
        options={[
          { value: "140", label: "140 characters" },
          { value: "280", label: "280 characters" },
          { value: "50", label: "50 words" },
          { value: "100", label: "100 words" },
          { value: "150", label: "150 words" },
          { value: "200", label: "200 words" },
          { value: "300", label: "300 words" },
          { value: "500", label: "500 words" },
        ]}
      />

      <FormField
        label="Use Emojis?"
        id="emojis"
        name="emojis"
        placeholder="Select"
        as="select"
        value={formData.emojis}
        onChange={handleChange}
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
      />
      {/* 
      <FormField
        label="Additional Links (optional) "
        id="links"
        placeholder="Add additional links"
        value={formData.links}
        onChange={handleChange}
      /> */}

      <FormField
        label="Language"
        id="language"
        name="language"
        placeholder="Select"
        as="select"
        value={formData.language}
        onChange={handleChange}
        options={[
          { value: "english", label: "English" },
          { value: "français", label: "Français" },
          { value: "español", label: "Español" },
          { value: "deutsch", label: "Deutsch" },
          { value: "italiano", label: "Italiano" },
        ]}
      />

      <div className="flex justify-center w-full">
        {isGenerating ? (
          <Button className="mt-7 h-[52px] main-gradient hover:bg-yellow-300 text-white p-2 rounded-md w-full gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span>Generating</span>
          </Button>
        ) : (
          <Button
            type="submit"
            className="mt-7 h-[52px] main-gradient hover:bg-yellow-300 text-white p-2 rounded-md w-full"
          >
            Submit
          </Button>
        )}
      </div>
    </form>
  );
};

const TwitterPost = () => {
  const [activeTab, setActiveTab] = useState("form");
  const [generatedText, setGeneratedText] = useState("");

  const TabsLayout = () => {
    switch (activeTab) {
      case "form":
        return (
          <FormItem
            setGeneratedText={setGeneratedText}
            setActiveTab={setActiveTab}
          />
        );
      case "content":
        return (
          <GenerateContentCard
            type="Twitter Post"
            responseText={generatedText}
          />
        );
      default:
        return <FormItem />;
    }
  };

  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="font-clash text-white text-2xl lg:text-[40px] font-semibold">
          Twitter (X) Post Generation
        </h1>
        <p className="font-semibold text-lg text-center lg:text-2xl text-black-4 font-quicksand">
          Compose impactful Twitter posts that cut through the noise and drive
          meaningful interactions.
        </p>
      </div>
      <div className="my-6">
        <div className="flex gap-4">
          <div className="flex items-center justify-start gap-4">
            <div
              className={`${
                activeTab === "form"
                  ? "main-gradient text-white"
                  : "bg-black-4 text-[#FEFEFE]"
              } w-8 h-6 rounded-full font-semibold items-center flex justify-center`}
            >
              <p className="text-sm lg:text-lg">1</p>
            </div>
            <button
              className={`text-sm lg:text-xl font-semibold ${
                activeTab === "form"
                  ? "main-gradient font-semibold bg-clip-text text-black-700"
                  : " text-black-4"
              }`}
              onClick={() => setActiveTab("form")}
            >
              Complete the Form
            </button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div
              className={`${
                activeTab === "content"
                  ? "main-gradient text-white"
                  : "bg-black-4 text-[#FEFEFE]"
              } w-8 h-6 rounded-full font-semibold items-center flex justify-center`}
            >
              <p className="text-sm lg:text-lg">2</p>
            </div>
            <button
              className={`text-sm lg:text-xl font-semibold ${
                activeTab === "content"
                  ? "main-gradient bg-clip-text text-black-700"
                  : " text-black-4"
              }`}
              onClick={() => setActiveTab("content")}
            >
              Generated Content
            </button>
          </div>
        </div>
        <div className="my-4">
          <TabsLayout />
        </div>
      </div>
    </section>
  );
};

export default TwitterPost;
