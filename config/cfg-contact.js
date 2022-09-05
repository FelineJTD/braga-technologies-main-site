// CONFIG FOR CONTACT PAGE
// In this file: LastSectionImage, Forms

// LAST SECTION IMAGE
// This is the background image for the last section.
export const LastSectionImage = "https://picsum.photos/1080/1920";

// FORM FIELDS
// size: 2 for half, 4 for full. Basically it is a 4-column grid. You can get a 1/4 or 3/4 sizes too with 1 or 3.
// type: text, textarea, select, and checkbox.
export const Forms = [
  {
    title: 'Business Inquiries',
    info: 'Expect our team to reach out to you in at least 2 business days.',
    form: [
      {
        label: 'First Name',
        type: 'text',
        name: 'first-name',
        size: 2,
      },
      {
        label: 'Last Name',
        type: 'text',
        name: 'last-name',
        size: 2,
      },
      {
        label: 'Email Address',
        type: 'text',
        name: 'email',
        size: 2,
      },
      {
        label: 'Country/Region',
        type: 'select',
        name: 'region',
        options: ['Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada', 'New Zealand', 'Other'],
        size: 2,
      },
      {
        label: 'Company Name',
        type: 'text',
        name: 'company-name',
        size: 2,
      },
      {
        label: 'Job Title',
        type: 'text',
        name: 'job-title',
        size: 2,
      },
      {
        label: 'Phone Number',
        type: 'text',
        name: 'phone-number',
        size: 4,
      },
      {
        label: 'Message',
        type: 'textarea',
        name: 'message',
        placeholder: 'Tell us about it',
        size: 4,
      },
      {
        label: 'I would like to receive updates and news from Braga Technologies by email.',
        type: 'checkbox',
        name: 'newsletter',
        checked: true,
        size: 4,
      }
    ],
    submitLabel: 'Send',
  },
  {
    title: 'Tech Support',
    info: 'Fill this form if you have technical issue to discuss or report to us.',
    form: [
      {
        label: 'First Name',
        type: 'text',
        name: 'first-name',
        size: 2,
      },
      {
        label: 'Last Name',
        type: 'text',
        name: 'last-name',
        size: 2,
      },
      {
        label: 'Email Address',
        type: 'text',
        name: 'email',
        size: 2,
      },
      {
        label: 'Country/Region',
        type: 'select',
        name: 'region',
        options: ['Indonesia', 'United States', 'United Kingdom', 'Australia', 'Canada', 'New Zealand', 'Other'],
        size: 2,
      },
      {
        label: 'Select Technical Support',
        type: 'select',
        name: 'phone-number',
        options: ['Technical Support', 'Billing Support', 'Other'],
        size: 4,
      },
      {
        label: 'Message',
        type: 'textarea',
        name: 'message',
        placeholder: 'Tell us about it',
        size: 4,
      },
    ],
    submitLabel: 'Send',
  },
  {
    title: 'General Affair',
    info: 'We\'d love to extend our knowledge to everyone beyond ourselves. We hold sharing sessions and discussions based on our expertise to advocate for Geospatial tech.',
    form: [
      {
        label: 'First Name',
        type: 'text',
        name: 'first-name',
        size: 2,
      },
      {
        label: 'Last Name',
        type: 'text',
        name: 'last-name',
        size: 2,
      },
      {
        label: 'Email Address',
        type: 'text',
        name: 'email',
        size: 2,
      },
      {
        label: 'Country/Region',
        type: 'select',
        name: 'region',
        options: ['Indonesia', 'Malaysia', 'Singapore', 'Thailand', 'Vietnam'],
        size: 2,
      },
      {
        label: 'Company Name',
        type: 'text',
        name: 'company-name',
        size: 2,
      },
      {
        label: 'Job Title',
        type: 'text',
        name: 'job-title',
        size: 2,
      },
      {
        label: 'Phone Number',
        type: 'text',
        name: 'phone-number',
        size: 4,
      },
      {
        label: 'Message',
        type: 'textarea',
        name: 'message',
        placeholder: 'Tell us about it',
        size: 4,
      },
      {
        label: 'I would like to receive updates and news from Braga Technologies by email.',
        type: 'checkbox',
        name: 'newsletter',
        checked: true,
        size: 4,
      }
    ],
    submitLabel: 'Send',
  },
  {
    title: 'Appointment',
    info: 'Set an appointment and speak with our Representative of Partnership and Strategy for an in depth consultancy or schedule a live demo at your place.',
    form: [],
    submitLabel: 'Set a Schedule',
  },
]