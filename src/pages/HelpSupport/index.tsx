import React from 'react';
import { Mail, Phone, MessageCircle, FileText, ExternalLink } from 'lucide-react';

export const HelpSupportPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
      
      <div className="grid grid-cols-2 gap-6">
        <ContactCard
          title="Email Support"
          description="Get help via email within 24 hours"
          icon={<Mail />}
          action="Send Email"
          onClick={() => window.location.href = 'mailto:support@example.com'}
        />
        
        <ContactCard
          title="Phone Support"
          description="Talk to our support team"
          icon={<Phone />}
          action="Call Now"
          onClick={() => window.location.href = 'tel:+1234567890'}
        />

        <ContactCard
          title="Live Chat"
          description="Chat with our support team"
          icon={<MessageCircle />}
          action="Start Chat"
          onClick={() => console.log('Start chat')}
        />

        <ContactCard
          title="Documentation"
          description="Browse our help articles"
          icon={<FileText />}
          action="View Docs"
          onClick={() => console.log('View documentation')}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ title, description, icon, action, onClick }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-start">
      <div className="p-3 bg-indigo-100 rounded-lg">
        {React.cloneElement(icon as React.ReactElement, {
          className: 'w-6 h-6 text-indigo-600'
        })}
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <button
          onClick={onClick}
          className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {action}
          <ExternalLink className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <h3 className="text-lg font-medium text-gray-900">{question}</h3>
    <p className="mt-2 text-gray-600">{answer}</p>
  </div>
);

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email."
  },
  {
    question: "How can I update client information?",
    answer: "Navigate to the Client Tab, find the client you want to update, and click the edit icon. Make your changes and save."
  },
  {
    question: "Where can I find compliance reports?",
    answer: "All compliance reports can be found in the Reports Tab. You can filter by date, client, or type of report."
  }
];