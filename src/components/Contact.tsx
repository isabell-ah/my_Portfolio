import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id='contact' className='scroll-mt-16'>
      <div className='section-container'>
        <h2 className='section-title'>Get In Touch</h2>
        <p className='section-subtitle'>
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>
          {/* Contact Information */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-bold'>Contact Information</h3>
            <p className='text-muted-foreground'>
              Fill out the form or contact me directly using the information
              below.
            </p>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full text-primary'>
                  <Mail size={24} />
                </div>
                <div>
                  <p className='font-medium'>Email</p>
                  <a
                    href='mailto:wanzalaisabella@gmail.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    wanzalaisabella@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full text-primary'>
                  <Phone size={24} />
                </div>
                <div>
                  <p className='font-medium'>Phone</p>
                  <a
                    href='tel:+254748232218'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    + (254) 748-232218
                  </a>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0 mr-4 bg-primary/10 p-3 rounded-full text-primary'>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className='font-medium'>Location</p>
                  <p className='text-muted-foreground'>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <h4 className='text-lg font-medium mb-4'>Let's connect</h4>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/isabell-ah'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <span className='sr-only'>GitHub</span>
                  <i className='icon-github'></i>
                </a>
                <a
                  href='https://linkedin.com/in/sharon-isabellah'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <i className='icon-linkedin'></i>
                </a>
                <a
                  href='https://twitter.com/SharonIsabellah2'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors'
                >
                  <span className='sr-only'>Twitter</span>
                  <i className='icon-twitter'></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-card border border-border rounded-lg p-6 shadow-sm'>
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-1'
                >
                  Name
                </label>
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your name'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-1'
                >
                  Email
                </label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Your email'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium mb-1'
                >
                  Subject
                </label>
                <Input
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject of your message'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-1'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your message'
                  rows={5}
                  required
                />
              </div>

              <Button type='submit' className='w-full' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className='ml-2 h-4 w-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
