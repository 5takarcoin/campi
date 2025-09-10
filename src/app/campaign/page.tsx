"use client";

const Page = () => {
  return (
    <div className="mx-4 gap-4 p-4 h-full flex flex-col">
      
      <div className="flex flex-col gap-4">
        <div className="px-8 py-4 rounded-xl bg-button/10">
        <h3 className="text-2xl my-4 flex gap-2 items-center">
          Campaign Goal:
        </h3>
        <p>To boost visibility and conversions for Leo’s fabric company by creating a short, impactful 3-day email campaign that introduces the brand, builds trust, and drives action (purchase/inquiry/collaboration).</p>
      </div>

        <div className="px-8 py-4 rounded-xl bg-button/10">
          <h3 className="text-2xl my-4 flex gap-2 items-center">
            3-Day Campaign Plan:
          </h3>
          <p>
            ✅ Day 1 – Introduction & Storytelling Subject: “Leo, your fabric tells stories. Let’s make the world listen.”Goal: Introduce the brand, highlight uniqueness, and connect emotionally. 
          <br/>  <br/>
          ✅ Day 2 – Product Focus & Benefits Subject: “Why Leo’s Fabrics Are More Than Just Textiles”Goal: Showcase product features, types of fabrics, quality, sourcing, design, etc. 
          <br/>  <br/> 
          ✅ Day 3 – Offer & Call to Action Subject: “A Special Deal Woven Just for You, Leo 🧵”Goal: Drive action with limited-time offer, free consultation, or bulk order deal.
          </p>
        </div>

        <div className="px-8 py-4 rounded-xl bg-button/10">
          <h3 className="text-2xl mt-4 flex gap-2 items-center">
          Day 1 Email – Brand Introduction (Client: Leo)
          </h3>
          <p className="text-foreground/70 py-4">Subject: Leo, your fabric tells stories. Let’s make the world listen.</p>
          <p>
          Hi Leo,
          <br/>
          <br/>

There’s something timeless about fabric —<br/> It holds culture, captures design, and connects generations.<br/> And your work? It embodies that magic.
At [Your Agency/Company Name], we see what yore building — a brand that doesn’t just sell cloth, but crafts legacy.<br/> That’s why we’re excited to partner with businesses like yours — to turn craftsmanship into conversation, and textiles into talk-of-the-town.
Here’s what we’re offering for you:
A customized marketing strategy tailored for your fabric business
Visual storytelling that aligns with your brand voice
Campaigns that convert interest into loyal clients
We believe your fabric brand deserves a spotlight. And we know exactly how to create it.
Let’s have a quick chat this week — even 15 minutes could spin your story into something bigger.
👉 Book a Call with Us
Warm regards,<br/>[Your Name]<br/> Marketing Strategist | [Your Company Name]<br/> 📞 [Phone Number]<br/> 🌐 [Website]<br/> 📧 [Email Address]
          </p>
        </div>
        </div>
      
        <div className="text-end">
          <button className="bg-button  text-white m-1 rounded-md px-4 py-2 text-md">
            Modify
          </button>
          <button className="bg-foreground  text-white m-1 rounded-md px-4 py-2 text-md">
            Continue
          </button>
        </div>
    </div>
  )
};

export default Page;
