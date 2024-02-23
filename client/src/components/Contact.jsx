/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Contact({ listing }) {
  const { t } = useTranslation('global');
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      console.log(listing.userRef);
      try {
        const res = await fetch(`/api/user/contact/${listing.userRef}`);
        const data = await res.json();
        console.log(data);
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  return (
    <>
      {landlord && (
        <div
          className="
        bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]
        flex flex-col mt-10"
        >
          <span className="text-center text-xl font-semibold">
            <img
              src={landlord.avatar}
              alt={landlord.username}
              className="mt-6 w-20 h-20 rounded-full mx-auto"
            />
            <span className="font-semibold">{landlord.username}</span>
          </span>
          <p className="ml-3 mt-3 mb-2">{t('contact.contact')}</p>
          <span className="mx-3">
            <input
              type="text"
              id="contactName"
              placeholder={t('contact.name') + '*'}
              className="mb-1 border rounded-lg p-3 w-full"
              value=""
              onChange={onChange}
            />
            <input
              type="text"
              id="contactEmail"
              placeholder={t('contact.email') + '*'}
              className="my-1 border rounded-lg p-3 w-full"
              value=""
              onChange={onChange}
            />
            <input
              type="text"
              id="contactPhone"
              placeholder={t('contact.phone') + '*'}
              className="my-1 border rounded-lg p-3 w-full"
              value=""
              onChange={onChange}
            />
            <textarea
              name="message"
              id="contactMessage"
              rows="2"
              value=""
              onChange={onChange}
              placeholder={t('contact.message') + '*'}
              className="my-1 w-full border p-3 rounded-lg"
            ></textarea>
          </span>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="mx-3 mb-2 bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
