/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import artImg from "../../assets/page-banner.png";
import Newes_letter from "../Newes_letter/Newes_letter";
export default function Terms_Conditions() {
  return (
    <>
      <section className="section">
        <div className="contizer flex flex-col gap-4 md:gap-8 xl:gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-14 xl:gap-16">
            <div className="col-span-5 lg:col-span-2">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Terms & Conditions
              </h2>
              <ul className="flex gap-4 items-center sm:py-2">
                <Link
                  to="/"
                  className="text-sm font-medium text-[#000] hover:text-[#868c19]"
                >
                  Home
                </Link>
                <li className="text-[6px] text-[#868c19]">⚫</li>
                <li className="text-sm font-medium text-[#868c19]">
                  Terms & Conditions
                </li>
              </ul>
            </div>
            <div className="col-span-5 lg:col-span-3">
              <img src={artImg} alt="" />
            </div>
          </div>
          <div className="terms">
            <p>
              Before you register and conduct or download Texam downloadable
              product(s) for your motives, please ensure you have read,
              acknowledged, and accepted all the terms. By using Texam and/or
              other items, we believe you have agreed to the following terms and
              conditions.
            </p>
            <h4>Refunds</h4>{" "}
            <p>
              We have a patron amicable 15 days refund policy. However, you
              can’t interrogate for a refund claiming a feature that your bought
              theme or plugin does not comprehend.
            </p>{" "}
            <ul className="flex flex-col gap-4">
              <li>
                {" "}
                1. Complimentary ground shipping within 1 to 7 business days
              </li>
              <li>
                {" "}
                2. In-store collection available within 1 to 7 business days
              </li>
              <li>3. Next-day and Express delivery options also available</li>
              <li>
                4. Purchases are delivered in an orange box tied with a Bolduc
                ribbon, with the exception of certain items
              </li>
              <li>
                5. See the delivery FAQs for details on shipping methods, costs
                and delivery times
              </li>
            </ul>
            <h4> Product Delivery</h4>{" "}
            <p>
              All products can be downloadable upon buy. Products will be
              unrestricted for download after payment is received and verified.
              To process our payments, we use Stripe & PayPal, which supports
              most debit and credit cards, i.e., MasterCard, Visa, American
              Express, Discover, JCB, etc. You must accept their terms and
              conditions before.
            </p>{" "}
            <ul>
              <li className="flex gap-4 items-center">
                ◾
                <p>
                  Credit Card: Visa, MasterCard, Discover, American Express,
                  JCB, Visa Electron. The total will be charged to your card
                  when the order is shipped.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                ◾
                <p>
                  Texas features a Fast Checkout option, allowing you to
                  securely save your credit card details so that you don't have
                  to re-enter them for future purchases.
                </p>
              </li>
              <li className="flex gap-4 items-center">
                ◾
                <p>
                  PayPal: Shop easily online without having to enter your credit
                  card details on the website.Your account will be charged once
                  the order is completed. To register for a PayPal account,
                  visit the website paypal.com.
                </p>
              </li>
            </ul>{" "}
            <p>
              {" "}
              Your buying information will be mailed to your email address. You
              have to create an account on our site to download any of our
              products. There are some reasons that your payment is not
              completed, and after that, we need to investigate and process the
              download info manually. So, delays can be as long as 1 hour to 48
              hours based on the situation and extent of investigation required
              after a fraud alert has been activated.
            </p>{" "}
            <h4> Product Updates</h4>{" "}
            <p>
              All themes and plugins are designed to be compatible with the
              latest version of WordPress. Texam themes, templates, and plugins
              support the latest modern web browsers, including Chrome, Safari,
              Firefox, Brave, UC, Edge, Opera Mini, etc. Product updates are
              available to our customers for a lifetime.
            </p>
            <h4> Modifications</h4>{" "}
            <p>
              You can modify any of our products based on your needs/demands.
              But please remember that before modifying, check the documentation
              and tell us in the comment or support section if there is an
              easier and better way to make what you want.
            </p>{" "}
            <h4> Unauthorized Usage</h4>{" "}
            <p>
              You should not use the Texam products for any unauthorized purpose
              in the use of the service, violate any laws in your jurisdiction
              (including but not limited to copyright laws), as well as the laws
              of the European Union and International law. Using our
              themes/templates/plugins is forbidden on websites that civilize
              violence, pornography, incivility content, or piracy links. We
              reserve the right to block your user account instantly if we
              notice any improper usage. If you signed up on the Texam.com
              website, you are liable for maintaining the safety of that, and
              you are fully responsible for all activities that happen under
              your account or any other operations that have taken from that.
              You must notify us without delay for any disallowed uses of your
              account.
            </p>{" "}
            <h4>Licensing and Usage </h4>{" "}
            <p>
              Our items are licensed under the GNU General Public License v2.0.
            </p>{" "}
            <h4>Help/Support </h4>{" "}
            <p>
              Once you have downloaded our product, you may contact us for
              help/support via comment or by sending a message from the item
              support zone, and we will do our best to review and fix your bug.
              We will try to provide a solution via comment, support ticket, or
              email. After that, we will update the core product. Themes,
              templates, and plugin support is offered to customers via comment,
              email, or support ticket. If your support demands extra product
              modification, you must hire an expert.
            </p>{" "}
            <h4>Proprietary</h4>{" "}
            <p>
              You may not claim intellectual or monopolistic ownership of any of
              our products, modified or not. All products are the belongings of
              Texam. Our products are provided without any warranty, either
              published or not. In no case shall our legal person be responsible
              for any damages including, but not restricted to, direct,
              indirect, particular, incidental damages arising out of the use of
              our products. The above announcement is not authentic for those
              products which are released under the license of GNU/GPL (GNU
              GENERAL PUBLIC LICENSE). For more information about this license,
              please visit the GNU page.
            </p>{" "}
            <h4>Anti- juggle</h4>{" "}
            <p>
              However, our customer purchases can be pending for a manual
              anti-cheat checkup to review the payment system. You will receive
              an elaborate email about your payment. An anti-cheat check happens
              due to the progressive number of deceptive transactions from
              individuals who are not genuine cardholders of the credit cards
              used during purchases. The customer account can be ceased for a
              manual anti-cheat check for 24 hours. Also, it can be ceased for a
              longer term for more investigations.
            </p>{" "}
            <h4>Price Changes</h4>{" "}
            <p>
              Texas reserves the right at any time and from time to time to
              change or discard, provisionally or permanently, any product with
              or without prior notice.
            </p>{" "}
            <h4> Warranty</h4>{" "}
            <p>
              Texam products are provided “as is” without any warranty, either
              published or not. Each of the Texam products is guaranteed to
              function correctly upon appropriate installation, activation, and
              options configuration of the product in the latest technologies
              stable versions to which theme/template/plugin was dedicated.
              Texam cannot give guarantee compatibility with any 3rd party
              plugin – as there are too many plugins to support. Please ensure
              that the browsers you use will work with the
              themes/templates/plugins, as we guarantee that the Texam
              themes/templates/plugins will work with all browser combinations.
            </p>{" "}
            <p>
              {" "}
              We are not licensed to provide stock images and particular
              true-type fonts that might be used on any or all of the provided
              products. These require you to own or purchase from their
              respective owners. The images/videos we show in the demo versions
              of products are for demonstration motives, and you are not allowed
              to use them on production sites.
            </p>{" "}
            <p>
              All members have access to the comments. Texam does not commit to
              monitoring the comments, but we reserve the right to respond and
              answer the questions.
            </p>{" "}
            <p>
              {" "}
              We reserve the right to change and modify terms and conditions at
              any time without any prior notice.
            </p>
          </div>
        </div>
      </section>
      <Newes_letter />
    </>
  );
}
