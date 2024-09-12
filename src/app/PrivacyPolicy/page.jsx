"use client";
import React from "react";
import Footer from "@/app/footer/page";
import Navbar from "@/app/navbar/page";
import { LuDot } from "react-icons/lu";
import Link from "next/link";

const page = () => {
  const CurrentYears = new Date().getFullYear();
  const CurrentMonth = new Date().getMonth();
  const CurrentDate = new Date().getDate();
  return (
    <>
      <Navbar />
      <div className=" bg-white font-serif">
        <div className=" container mx-auto pb-10 flex flex-col justify-center items-center text-[#161345]">
          <div>
            <h1 className=" text-xl sm:text-4xl md:text-8xl py-10 font-semibold text-center">
              Privacy Policy
            </h1>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Guidance</h2>
            <ul>
              <li>
                Finn Wellness, LLC . (“Finn”) is committed to maintaining your
                trust by respecting and protecting your privacy. This Privacy
                Policy describes why and how we collect, use, share, and protect
                personal data collected from and about visitors and customers.
                It also explains your choices regarding how we share your
                personal data and communicate with you, how you can request
                access to and correction of your personal data, and other
                important considerations. Thank you for supporting Finn. In
                order to protect your personal data when you enjoy shopping at
                petfinn.com, we provide this privacy policy, which is actually a
                contract governing your use of our services.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Collection, Use and Storage of Personal Data
            </h2>
            <ul>
              <li>
                Personal data means any information relating to an identified or
                identifiable natural person (“data subject”); an identifiable
                natural person is one who can be identified, directly or
                indirectly, in particular by reference to an identifier such as
                a name, an identification number, or location data. Personal
                data does not include data that has been irreversibly anonymized
                or aggregated so that it can no longer enable us, whether in
                combination with other information or otherwise, to identify
                you. Depending on the products and services you choose, we
                collect different kinds of personal data from or about you.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Data You Provide</h2>
            <ul>
              <li>
                We collect the personal data you provide when you create an
                account to browse, purchase, or use our products and services or
                otherwise interact with us, such as when you fill in account
                information, contact us, participate in an online survey, use
                our online help or online chat tool. Text Marketing and
                notifications: By subscribing to text notifications you agree to
                receive recurring automated marketing messages at the phone
                number provided. Consent is not a condition of purchase. Reply
                STOP to unsubscribe. HELP for help. Msg & Data rates may apply.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Data from Your Equipment</h2>
            <ul>
              <li>
                If you want to prevent our app or website from accessing your
                phone data, you can reset permission on your phone. After
                obtaining your permission, photos/media/files access may include
                the ability to: Read the contents of your USB storage (such as
                SD card). Add contents to your USB storage. Format external
                storage. Mount or unmount external storage.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Local Storage</h2>
            <ul>
              <li>
                We may collect and store information (including personal data)
                locally on your device using mechanisms such as browser web
                storage (including HTML 5) and application data caches.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Data About Purchase</h2>
            <ul>
              <li>
                If you make a purchase, we collect personal data related with
                the purchase. This data includes all of your purchase data, such
                as your email, user name, shipping address and other
                authentication information, as well as billing, shipping, and
                contact details.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Data About Improving Our Services and Products
            </h2>
            <ul>
              <li>
                When you visit our website or app, we may collect data about the
                type of device you use, your device's unique identifier, the IP
                address of your device, your operating system, the type of
                Internet browser that you use, usage information, diagnostic
                information, and location information from or about the
                computers, phones, or other devices on which you install or
                access our products or services. Where available, our services
                may use GPS, your IP address, and other technologies to
                determine a device's approximate location to allow us to improve
                our products and services.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">How We Use Your Personal Data</h2>
            <ul>
              <li>
                Generally speaking, we use personal data to provide, improve,
                and develop our products and services, to communicate with you,
                to offer you targeted advertisements and services, and to
                protect us and our customers. Finn determines and controls how
                to process your personal data as data controller for the
                following purposes: Providing, improving, and developing our
                products and services. We use your personal data to help us
                provide, improve, and develop our products and services. This
                may include using personal data for purposes such as a complete
                shopping process, improving the users’ experiences, data
                analysis, research, and audits. Such processing is based on your
                prior express consent or our legitimate interest in offering you
                products and services. If you no longer wish to agree to above
                services we provide, please contact us to opt-out.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Communicating with You</h2>
            <ul>
              <li>
                Subject to your prior express consent, we may use personal data
                to send you marketing communications in relation to our own
                products and services, communicate with you about your account
                or transactions, and inform you about our policies and terms. If
                you no longer wish to receive email communications for direct
                marketing purposes, please contact us to opt-out. We also may
                use your data to process and respond to your requests when you
                contact us. If you no longer wish to agree to the above services
                we provide, please contact us to opt-out.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Offering and Measuring Targeted Advertisements and Services
            </h2>
            <ul>
              <li>
                Subject to your prior express consent, we may use your personal
                data to personalize your experience with our products and
                services and on third party websites and applications and to
                determine the effectiveness of our promotional campaigns. You
                are free to choose whether to receive promotion information or
                not. If you no longer wish to agree to the above services we
                provide, please email us to opt-out or choose ”unsubscribe” to
                opt out in those emails.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Promoting Safety and Security</h2>
            <ul>
              <li>
                Subject to your prior express consent, we may use some
                technology measures to protect your personal data for helping
                verify accounts and user normal activities, as well as to
                promote data safety and security, such as by monitoring fraud
                and investigating suspicious or potentially illegal activity or
                violations of our terms or policies. Such processing is based on
                our legitimate interest in helping ensure the safety of our
                products and services.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">How We Store Your Personal Data</h2>
            <ul>
              <li>
                We may take technology measures to make sure your personal data
                record is complete and accurate, such as cookies and similar
                technologies. And subject to your prior express consent, we may
                store our processing record of your personal data for ten years.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Cookies and Similar Technologies
            </h2>
            <ul>
              <li>
                We use cookies and similar technologies to provide, protect, and
                improve our products and services, such as by personalizing
                content, offering and measuring advertisements, understanding
                user behavior, and providing a safer experience.You can remove
                or reject cookies using your browser or device settings, but in
                some cases doing so may affect your ability to use our products
                and services.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Definition of "Cookies"</h2>
            <ul>
              <li>
                Cookies are small pieces of text used to store information on
                web browsers. Cookies are widely used to store and receive
                identifiers and other information on computers, phones, and
                other devices. These types of files do a number of different
                jobs such as remembering your preferences and chosen items,
                assisting you to improve your site experience as well as trying
                to ensure that the advertisements or offers you see online are
                more relevant to you. These “cookies” can be divided into 4
                types, each of which is outlined below.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" underline text-orange-500 font-bold text-2xl py-3">
              Types of Cookies
            </h2>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Strictly Necessary Cookies</h2>
            <ul>
              <li>
                In order to provide you with fundamental services of our
                website, such as visit our website or make a purchase, these
                cookies are essential. If you disable these cookies, we will not
                be able to fulfill your request.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Performance Cookies</h2>
            <ul>
              <li>
                This type of cookie collects anonymous information on how people
                use the site and the data is merged with other users to enable
                us to improve how the site operates. For example, Google
                Analytics cookies help us understand how customers arrive at our
                site, browse or use our site and highlight areas where we can
                improve areas such as navigation, shopping experience and
                marketing campaigns. The data stored by these cookies never
                shows personal details from which your individual identity can
                be established. If you disable or opt-out of these cookies, you
                may not be able to use certain features of our websites and
                services, and it may reduce the support or information that we
                can provide you.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Functionality Cookies</h2>
            <ul>
              <li>
                These cookies may remember the operations such as your
                preference so that we can provide you with better services and
                improve our operation models. If you reject these cookies, you
                may not be able to use certain functions of our websites.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Targeting Cookies or Advertising Cookies
            </h2>
            <ul>
              <li>
                These cookies collect information about your browsing habits in
                order to make advertising more personalized to you. These
                cookies may remember the websites you have visited and share
                them with the third parties such as advertisers. If you reject
                these cookies, you may not be able to use certain functions of
                our websites and services, and it may affect your experience.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Social Networking Cookies</h2>
            <ul>
              <li>
                These cookies are used to enable you to share pages and content
                on our websites and services through third party social
                networking and other websites. These cookies may also be used
                for advertising purposes. If you reject these cookies, you may
                not be able to use certain functions of our websites, and it may
                affect your experience.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">SMS Cookies</h2>
            <ul>
              <li>
                The website uses cookies to help keep track of items you put
                into your shopping cart including when you have abandoned your
                cart and this information is used to determine when to send cart
                reminder messages via SMS. We will not share your opt-in to an
                SMS campaign with any third party for purposes unrelated to
                providing you with the services of that campaign. We may share
                your Personal Data, including your SMS opt-in or consent status,
                with third parties that help us provide our messaging services,
                including but not limited to platform providers, phone
                companies, and any other vendors who assist us in the delivery
                of text messages.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Cookies Placed by Third Parties</h2>
            <ul>
              <li>
                You may also encounter cookies on our websites that are placed
                by third parties. For example, when you buy our products online,
                we may use cookies and other technologies. We may also allow
                third parties to place cookies on our websites to track
                information about your online activities and/or across third
                party sites or online services, including to send you targeted
                advertisements based on that information, which may include the
                remarketing of our products and services that you have viewed on
                our websites and on third party websites. This Cookie Statement
                does not apply to the cookies, applications, technologies or
                websites that are owned by and/or operated by third parties, or
                such third parties' practices, even if they use or access our
                technology to store or collect information. To understand how
                third parties use cookies, please review their privacy policies.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Controlling and Opting-Out of Cookies
            </h2>
            <ul>
              <li>
                You can change the settings on your browser to prevent cookies
                being stored on your computer or mobile device without your
                explicit consent. Your browser “help” section will normally
                provide details on how to manage the cookie settings. If you
                choose to reject cookies, as noted above, you may not be able to
                use certain features of our websites and services.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Other Similar Technologies</h2>
            <ul>
              <li>
                DPAPI (Data Protection Application Programming Interface) is a
                simple cryptographic application programming interface available
                as a built-in component in Windows 2000 and later versions of
                Microsoft Windows operating systems. In theory the Data
                Protection API can enable symmetric encryption of any kind of
                data; in practice, its primary use in the Windows operating
                system is to perform symmetric encryption of asymmetric private
                keys, using a user or system secret as a significant
                contribution of entropy. DPAPI can help record and store users’
                personal data. If you choose to reject cookies, as noted above,
                you may not be able to use certain features of our websites and
                services.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Your Rights</h2>
            <ul>
              <li>
                We take reasonable steps to ensure that your personal data is
                accurate, complete, and up to date. Based on protection for your
                privacy, you have the following rights: You have the right to
                contact us to know whether or not your personal data is being
                processed, and, where that is the case, access to the personal
                data and information, including but not limited to the purposes
                of the processing and the categories of personal data concerned.
                Taking into account the purposes of the processing, you are free
                to have incomplete personal data completed, including by means
                of providing a supplementary statement. You have the right to
                obtain from us the erasure of personal data concerning yourself.
                You have the right to contact us to set the restriction of
                processing, which limits our processing authorities. You have
                the right to receive the personal data you provide in a
                structured, commonly used and machine-readable format and to
                transmit those data to a third party. You have the right to
                contact us to make your objection on grounds relating to your
                particular situation, at any time to processing of personal
                data. You have the right not to be subject to a decision based
                solely on automated processing, including profiling, which
                produces legal effects concerning you or similarly significantly
                affect you. When you need to realize this right, please contact
                us to offer help. To protect the privacy and the security of
                your personal data, we may request data from you to enable us to
                confirm your identity and right to access such data, as well as
                to search for and provide you with the personal data we
                maintain. There are instances where applicable laws or
                regulatory requirements allow or require us to refuse to provide
                or delete some or all of the personal data that we maintain. You
                may contact us to exercise your rights. We will respond to your
                request within 30 days.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" underline text-orange-500 font-bold text-2xl py-3">
              Checking Your Details
            </h2>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Deleting Your Information</h2>
            <ul className=" flex-col flex gap-3">
              <li>
                Please contact us when you find it necessary to delete your
                information.
              </li>
              <li>
                This includes personal data for providing, improving, and
                developing our products and services. If this type of data is
                deleted, your account will be closed because your account cannot
                be used normally without this type of data.
              </li>
              <li>
                This includes personal data that we use to communicate with you.
                If this type of data is deleted, we will be unable to contact
                you. Please make your decisions cautiously.
              </li>
              <li>
                This includes personal data to offer and measure targeted
                advertisements and services. If this type of data is deleted,
                you will not receive the latest marketing news and personalized
                shopping services.
              </li>
              <li>
                This includes personal data relating to promoting safety and
                security. If this type of data is deleted, your account will be
                strongly threatened that you may not use your account normally.
              </li>
              <li>
                If you delete your data, we have no obligation to retain your
                data, and we may delete any or all of your data without
                liability. However, we may retain data related to you if we
                believe it may be necessary to prevent fraud or future abuse, if
                required by law, or for legitimate purposes, such as analysis of
                non-personal data, account recovery, auditing our records, and
                enforcing our rights and obligations under our agreements.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Children</h2>
            <ul>
              <li>
                Please confirm that when you agree with this privacy statement,
                your age is at least 16 years old or you have a guardian's
                authorization. Please immediately contact us if you become aware
                that a child under 16 has provided us with personal data.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Disclosure of Personal Data</h2>
            <p>
              We make certain personal data available to strategic partners that
              work with us to provide our products and services or help us
              market to customers. Personal data will only be shared by us with
              these companies in order to provide or improve our products,
              services, and advertising; it will not be shared with third
              parties for their own marketing purposes without your prior
              express consent.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Service Providers</h2>
            <p>
              We share personal data with companies that provide services on
              behalf of us, such as website hosting, email services, marketing,
              sponsoring of sweepstakes, contests, and other promotions,
              auditing, fulfilling customer orders, data analytics, providing
              customer service, and conducting customer research and
              satisfaction surveys. These companies are obligated to protect
              your data and may be located wherever we operate.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Corporate Affiliates and Corporate Business Transactions
            </h2>
            <p>
              We may share personal data with affiliated companies and business
              partners. In the event of a merger, reorganization, acquisition,
              joint venture, assignment, spin-off, transfer, or sale or
              disposition of all or any portion of our business, including in
              connection with any bankruptcy or similar proceedings, we may
              transfer any and all personal data to the relevant third party.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Legal Compliance and Security</h2>
            <p>
              It may be necessary — by law, legal process, litigation, and/or
              requests from public and governmental authorities within or
              outside your country of residence — for us to disclose personal
              data. We may also disclose personal data if we determine that for
              purposes of national security, law enforcement, or other issues of
              public importance, disclosure is necessary or appropriate.
            </p>
            <p>
              We may also disclose personal data if we determine in good faith
              that disclosure is reasonably necessary to protect our rights and
              pursue available remedies, enforce our terms and conditions,
              investigate fraud, or protect our operations or users.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Legal Basis for the Processing of Personal Data from EEA Residents
            </h2>
            <ul className=" flex flex-col gap-3">
              <li>
                It may be necessary—by law, legal process, litigation, and/or
                requests from public and governmental authorities within or
                outside your country of residence—for us to disclose personal
                data. We may also disclose personal data if we determine that
                for purposes of national security, law enforcement, or other
                issues of public importance, disclosure is necessary or
                appropriate.
              </li>
              <li>
                If you reside within the European Economic Area (EEA), our
                processing of your personal data will be justified if one of the
                following conditions is satisfied:
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <LuDot />
                Whenever we obtain your consent;
              </li>
              <li className=" flex items-center gap-2">
                {" "}
                <LuDot />
                Whenever the processing of your personal data is necessary for
                the performance of a contract between you and us or for taking
                any pre-contractual steps upon your request;
              </li>
              <li className=" flex items-center gap-2">
                <LuDot />
                Where the processing is necessary for us to comply with a legal
                obligation;
              </li>
              <li className=" flex items-center gap-2">
                <LuDot />
                Where the processing is necessary for the purposes of our
                legitimate interests;
              </li>
              <li className=" flex items-center gap-2">
                <LuDot />
                Where the processing is necessary for legal and reasonable
                causes (under this situation we will specifically explain the
                details).
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Data Processing Globally</h2>
            <ul className=" flex flex-col gap-3">
              <li>
                The definition of Processing is any operation or set of
                operations which is performed on personal data or on sets of
                personal data, whether or not by automated means, such as
                collection, recording, organization, structuring, storage,
                adaptation or alteration, retrieval, consultation, use,
                disclosure by transmission, dissemination or otherwise making
                available, alignment or combination, restriction, erasure or
                destruction.
              </li>
              <li>
                We provide products and service to customers around the world
                and your personal data may be transferred to, and stored at, a
                destination outside the European Economic Area ("EEA"). It may
                also be processed outside the EEA by staff who work for Finn or
                one of our suppliers. Data protection laws vary among countries,
                with some providing more protection than others. Regardless of
                where your information is processed, we apply the same
                protections described in this policy. We also sufficiently
                consider certain legal frameworks relating the processing of
                data.
              </li>
              <li>
                When we provide products and services to customers under
                assistance of our affiliates, business partners and service
                providers your personal data may be processed out of EEA. In
                such circumstances, we will enter into model contractual
                clauses, or rely on alternative legal bases such as the Privacy
                Shield, where applicable, or binding corporate rules where our
                partners or service providers have adopted. Appropriate or
                suitable safeguards, for example, encryption technology, will be
                provided to ensure security of your information. Our customers
                have the right to obtain a copy of those data transferred to a
                third country. If you need to realize your rights, please
                contact us. As for details of data processing of the third
                parties that may reach your personal data, please read the
                following introduction of Third Party.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" underline text-orange-500 font-bold text-2xl py-3">
              Data Processed by Third Parties
            </h2>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Facebook, Twitter, Google</h2>
            <p>
              When you login into your account via Facebook, Twitter, Google at
              Finn, we are available to obtain your login information
              automatically because these third parties have previously
              authorized us to collect your information in order to help you
              login in conveniently. To protect your information better, we
              sincerely recommend you to familiarize yourself with the privacy
              policy provided by these third parties before you login in through
              your account registered at their websites. Consequently, please
              note that you should also take steps to protect yourself,
              especially online. Do not share your password with anyone else.
              Also remember to sign out of the website and close your browser
              window when you have finished your work. If you really mind
              providing us with your personal data through the previous
              authorization, you may register a new account at Finn.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Paypal</h2>
            <p>
              If you choose to pay online through “Check out with Paypal”,
              please be aware of the fact that once you click the button, you
              will be link to the website of Paypal. The personal data that you
              are asked to provide, including your card number, your billing
              address and your contact information, will be collected and
              processed by Paypal instead of Finn, though our trademark/logo can
              still be seen on the top left corner on that website. We sincerely
              recommend you to read about the privacy policy of Paypal and make
              your choice among different payments cautiously. Finn will not be
              liable for your data processing by Paypal when you click the
              button “Check out with Paypal”.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Other Third parties That May Reach Your Information
            </h2>
            <p>
              To provide better products and service for our customers, we may
              mainly transfer your data to the two types of third parties:
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" text-xl font-bold py-3">
              Other Third parties That May Reach Your Information
            </h2>
            <p>
              To provide better products and service for our customers, we may
              mainly transfer your data to the two types of third parties:
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Third Party Related to Advertising & Marketing
            </h2>
            <p>
              Information of your activities on our website, for example, what
              products you like to browse, may be transferred to third parties.
              You may receive communication letters on advertising and marketing
              in your email sent by us and/or selected third parties. You have
              the option to opt-out of receiving marketing communications from
              us and/or selected third parties. When you do not want to receive
              advertisements from us and/or selected third parties any more, you
              should opt-out by contacting us (email) or click on the
              "unsubscribe" link in any email communications which you receive.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Third Party Related to Payment and Delivery
            </h2>
            <p>
              If you make a purchase from our store, your payment and delivery
              information will be necessary to the trade. Your information may
              be transferred to third parties above and processed by them. We
              promise that appropriate or suitable safeguards, for example,
              encryption technology, will be provided to ensure security of your
              information This type of personal data is so important to your
              purchase activities that we strongly recommend you to think twice
              when you want to delete or object to the processing of these data.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              About Third Party Located in a Third Country
            </h2>
            <p>
              As we have stated above, model contractual clauses or alternative
              legal bases or binding corporate rules will help protect your
              information security. Once we notice a third party breaches its
              obligation and infringe your privacy, we will immediately notice
              it to correct its mistake. If you notice a third party breaches
              its obligation and infringes your privacy owing to Finn’s mistake,
              you may contact us to obtain remedies. We promise that appropriate
              or suitable safeguards, for example, encryption technology, will
              be provided to ensure security of your information. Our customers
              have the right to obtain a copy of those data transferred to a
              third country. If you need to realize your rights, please contact
              us.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">About Third Party Websites</h2>
            <p>
              Our website may contain links to and from the websites of our
              partner networks, advertisers and other third parties. If you
              follow a link to any of these websites, please note that they have
              their own privacy policies and we do not share your information
              with them unless your permission or other legal basis authorize us
              to do so. Please check these policies before you submit any
              personal data to these websites. We should not be liable for
              personal data breach caused by these third party websites. us.
            </p>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Information Security</h2>
            <ul className=" flex flex-col gap-3">
              <li>
                We use reasonable technical, administrative, and physical
                security measures designed to safeguard and help prevent
                unauthorized access to your data, and to correctly use the data
                we collect. For example, access to your personal data is
                strictly limited to our data controller, data processor, data
                protection officer who need access to such data to perform their
                assigned job duties. We have built a recovery system to prevent
                your data from destruction, loss, alteration, unauthorized
                disclosure caused by automatic technology.
              </li>
              <li>
                It is important that you take precautions to protect against
                unauthorized access to your account credentials, and computer or
                other devices. “Personal data breach” means a breach of security
                leading to the accidental or unlawful destruction, loss,
                alteration, unauthorized disclosure of, or access to, personal
                data transmitted, stored or otherwise processed. If you notice
                such a kind of personal data breach, please immediately contact
                us. We will investigate any complaint and notify the individual
                of the outcome of the investigation within a reasonable period.
                Finn has set up a Data Protection Officer (DPO) to provide
                professional analysis about personal data processing. Whenever
                you need help directly from our DPO, you are free to inform us
                of your requirement. Please be aware that, despite our best
                efforts, no security system is impenetrable. In the event of a
                security breach, we will promptly notify you and the proper
                authorities if required by law.
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">
              Changes to this Privacy Statement
            </h2>
            <ul className=" flex flex-col gap-3">
              <p>
                From time to time, we may update our Privacy Policy to reflect
                new or different privacy practices. We will place a notice to
                our customers when we make material changes to the Privacy
                Policy. The modification of the Privacy Policy is of great
                significance to ensure your rights on personal data.
                Consequently, we sincerely recommend you check the Privacy
                Policy available online periodically. Additionally, you are
                always free to check the Privacy Policy through quick links
                whenever you need to input your personal data. Simultaneously,
                we will notify you about the modification by sending a notice to
                your account. There will be a special quick link in your account
                to offer the full text of the Privacy Policy.
              </p>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold py-3">Contact Us</h2>
            <ul className=" flex flex-col gap-3">
              <li>Thank you for supporting Finn.</li>
              <li>
                We are always pleased to hear from our customers and are always
                grateful for any time you spend providing us with the knowledge
                we need to ensure our customers are completely satisfied.
              </li>
              <li>
                Please contact us if you have any questions, comments or
                complaints if you believe that Finn has not handled your
                personal data properly or that it has breached its privacy
                obligations, your complaint may be directed at Finn’s Technology
                Service Department at{" "}
                <Link href="mailto:someone@example.com">
                  {" "}
                  <span className=" text-orange-500 hover:font-bold">
                    hello@petfinn.com.
                  </span>
                </Link>
              </li>
              <li>
                The Technology Service Department will investigate any complaint
                and notify the individual of the outcome of the investigation
                within a reasonable period. Finn has set up a Data Protection
                Officer (DPO) to provide professional analysis about personal
                data processing. Whenever you need help directly from our DPO,
                please inform us of your requirement.
              </li>
              <li>
                If your complaint must be solved immediately while the
                Technology Service Department has not made a response to you,
                please do not hesitate to reach the Live Support Service
                provided by our Customer Service Department. Your complaint will
                be instantly reported to the relevant department and
                investigated.
              </li>
              <li>
                You are also free to reach us via email:{" "}
                <Link href="mailto:someone@example.com">
                  <span className=" text-orange-500 hover:font-bold">
                    hello@petfinn.com.
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-full lg:w-[85%]">
            <h2 className=" font-bold text-xl py-7">
              Effective- {CurrentMonth}/{CurrentDate}/{CurrentYears}
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
