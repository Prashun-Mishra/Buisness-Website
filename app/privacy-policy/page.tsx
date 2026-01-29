'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
                            Legal
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Privacy <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Last updated: January 2026
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-invert prose-slate max-w-none"
                >
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Introduction
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                This privacy policy applies to Aetos Associates, a business consulting platform available through the website www.AetosAssociates.com.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Our group regularly processes a range of personal data, including names, email addresses, and various business-related details as part of our routine operations. We place a high priority on data security and compliance with data protection laws. This privacy policy outlines our methods for collecting, storing, using, and disclosing any personal data we obtain from you during your use of the website. It also details our commitment to safeguarding the privacy and confidentiality of your personal information. Your privacy is important to us, so whether you are a first-time visitor or a long-standing client, we encourage you to familiarize yourself with our policies – and do not hesitate to reach out with any inquiries.
                            </p>
                        </div>
                    </section>

                    {/* Data Controller */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Who is the Data Controller?
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                The data controller is Aetos Associates, with a registered office at 30 N Gould St Ste R Sheridan, WY 82801 USA. Aetos Associates is responsible for managing and protecting your personal data in accordance with U.S. privacy laws.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Aetos Associates in this policy is also named "data controller" "We", "Us", or "www.AetosAssociates.com".
                            </p>
                        </div>
                    </section>

                    {/* What Data We Collect */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            What Data Do We Collect?
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                Our data collection is focused on gathering essential information required to facilitate and manage your business services and arrangements. The types of personal data we collect primarily include details such as your full legal name, birth date, contact number, email address and payment details. We only require you to provide the personal data that is essential for the execution of the business services you have requested through our platform.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Depending on your chosen services, we may also need to collect additional data, including your business registration numbers, specific requirements, any pertinent compliance information, and other relevant details necessary for your business plans or as demanded by service providers. Please note that this is not an exhaustive list. Moreover, when you engage with our customer service team, we record the personal information you share during these interactions. Our website's cookies also capture certain types of information, as described in a subsequent section.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Furthermore, if you are making a request on behalf of another individual through our site, we will gather personal data regarding that person. In such situations, it is your responsibility to inform them about the nature and scope of this privacy policy.
                            </p>
                        </div>
                    </section>

                    {/* Legal Basis */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            On What Legal Basis Do We Process Your Data?
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed mb-6">
                                To comply with data protection laws, we are required to have a valid legal basis for processing your personal data. This foundational principle underpins our commitment to respecting and safeguarding your privacy.
                            </p>

                            <div className="space-y-6">
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Facilitating Your Business Services</h4>
                                    <p className="text-slate-400 text-sm"><strong>Legal Basis:</strong> The processing is necessary for the performance of our contract with you. In cases where sensitive personal data is involved, we rely on your explicit consent.</p>
                                    <p className="text-slate-400 text-sm"><strong>Storage Duration:</strong> 5 years from the date of your transaction.</p>
                                </div>

                                <div className="border-l-2 border-pink-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Managing Your User Account</h4>
                                    <p className="text-slate-400 text-sm"><strong>Legal Basis:</strong> Processing is essential for the performance of our contract, under which we provide you with a user account that gives you access to your service history and personal settings.</p>
                                    <p className="text-slate-400 text-sm"><strong>Storage Duration:</strong> Until you choose to deactivate your account. If the account remains inactive for 24 months, we will automatically delete it and its associated data.</p>
                                </div>

                                <div className="border-l-2 border-orange-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Assisting Incomplete Processes</h4>
                                    <p className="text-slate-400 text-sm"><strong>Legal Basis:</strong> Our legitimate interest in facilitating business operations and enhancing user experience.</p>
                                    <p className="text-slate-400 text-sm"><strong>Storage Duration:</strong> 24 hours from the point of abandonment.</p>
                                </div>

                                <div className="border-l-2 border-purple-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Recording Phone Calls</h4>
                                    <p className="text-slate-400 text-sm"><strong>Legal Basis:</strong> Our legitimate interest in ensuring quality service and effectively addressing any inquiries.</p>
                                    <p className="text-slate-400 text-sm"><strong>Storage Duration:</strong> 6 months from the date of the call, with access strictly limited to authorized personnel.</p>
                                </div>

                                <div className="border-l-2 border-pink-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Using Cookies</h4>
                                    <p className="text-slate-400 text-sm"><strong>Legal Basis:</strong> Our legitimate interest in offering a secure, efficient, and personalized online experience.</p>
                                    <p className="text-slate-400 text-sm"><strong>Storage Duration:</strong> Depends on the cookie type. You have the option to modify your browser settings to decline cookies.</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed mt-6">
                                Apart from the above, we conduct essential business functions like accounting, compliance with anti-money laundering laws, and website security measures. These activities are carried out either in compliance with legal obligations or based on our legitimate business interests. Additionally, we analyse customer behaviour in an aggregated and anonymized manner to continually improve our offerings.
                            </p>
                        </div>
                    </section>

                    {/* Fraud Prevention */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Prevention of Fraud
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                In our ongoing efforts to safeguard our services and users from fraudulent activities, we may process personal data to identify, prevent, and address instances of potential fraud. This includes measures such as flagging suspicious activities and may result in barring individuals suspected of fraud from future use of our website.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                We maintain a database of individuals suspected of fraudulent activities, which is used solely for the purpose of protecting our services and users. The retention period of data in this database is determined based on its necessity for fraud prevention and is regularly reviewed to ensure compliance with data protection laws.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Additionally, we retain the right to share this information with reputable and trusted third parties that operate in the field of fraud prevention, such as Ekata (https://www.ekata.com). In sharing this data with third parties, we will operate in a manner that respects privacy laws and the rights of the individuals concerned, ensuring compliance with all relevant regulations and legal requirements.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                If you believe that you have been incorrectly identified as engaging in fraudulent activity, or if you have any inquiries about our fraud prevention practices, please contact us.
                            </p>
                        </div>
                    </section>

                    {/* Data Storage Location */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Data Storage Location
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                As part of our commitment to data security and compliance with international data protection standards, Aetos Associates ensures that all personal data collected through our website, www.AetosAssociates.com, is stored securely within the U.S Territory.
                            </p>
                        </div>
                    </section>

                    {/* Disclosure of Personal Data */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Disclosure of Your Personal Data
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                In adherence to the objectives of this privacy policy we will share your personal data only when it is essential. This includes transfers within our organization, to governmental bodies, and to our reliable business associates. For example, your personal data, including sensitive data when necessary, might be distributed to entities such as regulatory authorities, financial institutions, and service providers, for the purpose of facilitating the business services you request. In addition we transfer your data to financial institutions, acquiring banks, PSP and fraud prevention providers in order to allow the payment of the service purchased.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                All these subjects will be operating as autonomous data controllers. In this case post transfer, the management of your personal data is the responsibility of the respective recipient. Therefore, for inquiries or actions regarding your data protection rights, you should directly approach the relevant entity. We encourage you to familiarize yourself with the privacy policies of these partners for a comprehensive understanding of their data management practices.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Further, we will share your personal data with other entities, termed as "data processors," who assist in delivering the services you have sought from us. This group includes, but is not limited to, those operating our call centers, as well as various suppliers and vendors who process your personal data while providing their services (such as external storage solutions).
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                We will share your personal data with competent authorities when we are required to do so by the current law or when this is necessary so that we can enforce our terms of use and protect and defend our rights or property or the rights or property of any third party.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Moreover, we will share your personal data with third parties that receive the data (e.g. business consultants, professionals for delivering due diligence services or assess value and capabilities of the business) when it is necessary in connection with any sale of our business or assets. In which case your details will be disclosed to our advisers and any prospective purchaser's advisers and will be passed to the new owners or merger or other relevant corporate transactions.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Given the worldwide scope of our services, your personal data may be processed across various international locations, particularly when the entities we share your data with operate outside U.S Territory. Such international sharing of personal data is founded on specific legal grounds as dictated by applicable data protection laws.
                            </p>
                        </div>
                    </section>

                    {/* External Providers */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            External Providers and Links
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                It's important to be aware that our website, AetosAssociates.com, includes links to external websites and features content from third-party providers. The privacy practices outlined in this document are specific to Aetos Associates' website and services. When navigating to other websites or utilizing third-party services and products, their own privacy policies govern the handling of your personal data, not ours.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Furthermore, if you interact with us through social media platforms, the personal data you provide in that context is subject to the privacy policy of the respective social media provider, not to this policy. We strongly advise you to review the privacy policies of these third-party websites and social media platforms to understand how they process your personal data.
                            </p>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Your Rights Regarding Your Personal Data
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed mb-6">
                                As a valued user of our services, you are entitled to various rights concerning your personal data, in line with the standards set by the General Data Protection Regulation (GDPR) and similar global data protection laws. These rights include:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Access</h4>
                                    <p className="text-slate-400 text-sm">You have the right to access your personal data that we hold. This includes the right to be informed about the nature of the data, how it's being processed, and the purposes of such processing.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Rectification</h4>
                                    <p className="text-slate-400 text-sm">If you find that the personal data we hold about you is inaccurate or incomplete, you have the right to have it corrected or completed.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Erasure</h4>
                                    <p className="text-slate-400 text-sm">Under certain circumstances, such as when the data is no longer necessary for the original purpose, you can request the deletion of your personal data from our records.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Restriction</h4>
                                    <p className="text-slate-400 text-sm">You can request a restriction on the processing of your personal data, which means that the data can still be stored by us but not further processed.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Data Portability</h4>
                                    <p className="text-slate-400 text-sm">This right allows you to receive your personal data in a structured, commonly used, and machine-readable format and to transfer that data to another data controller.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Object</h4>
                                    <p className="text-slate-400 text-sm">You have the right to object to certain types of processing of your personal data, especially those based on the grounds of legitimate interests or direct marketing.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Right to Lodge a Complaint</h4>
                                    <p className="text-slate-400 text-sm">If you have concerns about how we are processing your personal data, you have the right to lodge a complaint with a data protection supervisory authority.</p>
                                </div>

                                <div className="bg-slate-800/50 p-4 rounded-lg">
                                    <h4 className="text-white font-semibold mb-2">Additional Rights</h4>
                                    <p className="text-slate-400 text-sm">Depending on the specific circumstances and local laws, you may have additional rights such as the right to withdraw consent for data processing.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Data Retention
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                We retain your personal data for as long as is required to achieve the purposes and fulfil the activities as set out in this Privacy Policy, otherwise communicated to you or for as long as is permitted by applicable law. For details about the retention of your data in connection with each processing please refer to the paragraph "On what legal basis do we process your data?"
                            </p>
                        </div>
                    </section>

                    {/* Cookie Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Cookie Policy
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                At Aetos Associates, we are committed to ensuring the privacy and security of our users. Our website, www.aetosassociates.com, uses cookies—small text files placed on your device—to enhance your experience and ensure the website's functionality. This Cookie Policy outlines our practices regarding the use of cookies.
                            </p>

                            <div className="mt-6 space-y-4">
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Types of Cookies We Use</h4>
                                    <p className="text-slate-400 text-sm">We use essential cookies to enable basic features like page navigation, access to secure areas of the website, and session management. These cookies are crucial for our website's operation and service provision.</p>
                                </div>

                                <div className="border-l-2 border-pink-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Your Consent</h4>
                                    <p className="text-slate-400 text-sm">Our use of essential cookies, which are necessary for www.aetosassociates.com's functioning, does not require explicit user consent. These cookies are automatically enabled when you use our site.</p>
                                </div>

                                <div className="border-l-2 border-orange-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Managing Cookies</h4>
                                    <p className="text-slate-400 text-sm">While essential cookies are necessary for our site and cannot be turned off, you can manage your browser settings to block or alert you about these cookies. Please note that altering these settings might impact your experience on our website.</p>
                                </div>

                                <div className="border-l-2 border-purple-500 pl-4">
                                    <h4 className="text-white font-semibold mb-2">Browser Settings</h4>
                                    <p className="text-slate-400 text-sm">You have the option to change your browser settings if you prefer not to store cookies on your computer. However, disabling essential cookies might affect the functionality of our website.</p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed mt-6">
                                By using our website, you acknowledge our use of essential cookies as necessary for the proper functioning of www.aetosassociates.com.
                            </p>
                        </div>
                    </section>

                    {/* Payment Services */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Airwallex
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                We use Airwallex for payment, analytics, and other business services. Airwallex collects identifying information about the devices that connect to its services. Airwallex uses this information to operate and improve the services it provides to us, including for fraud detection. You can learn more about Airwallex and read its privacy policy at{' '}
                                <a href="https://www.airwallex.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors inline-flex items-center gap-1">
                                    https://www.airwallex.com/ <ExternalLink className="w-3 h-3" />
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Our Commitment to Data Security
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                At Aetos Associates we prioritize the security of your personal data and take meaningful steps to protect your information. For example, we employ industry-standard encryption to safeguard data during transmission and storage, which includes SSL encryption for our website. Access to personal data is strictly limited to authorized personnel who require it for their job functions.
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Additionally, our systems and software are regularly updated to protect against known security vulnerabilities. In line with the principle of data minimization, we only collect the data necessary for providing our services, thus reducing the volume of data that could potentially be at risk. We are committed to responsibly managing and securing your personal data, demonstrating our ongoing dedication to user privacy and security.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Contacting Us
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Should you have inquiries about how we manage your personal data, our cookie usage, or wish to exercise your rights as per data protection laws, feel free to reach out to us.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-purple-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <a href="mailto:support@aetosassociates.com" className="text-slate-400 hover:text-purple-400 transition-colors">support@aetosassociates.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-pink-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Address</h4>
                                        <p className="text-slate-400">
                                            Aetos Associates<br />
                                            Attention: Data Privacy Office<br />
                                            30 N Gould St Ste R Sheridan,<br />
                                            WY 82801<br />
                                            USA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Children's Privacy Protection
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                We take special care to protect the privacy needs of children and encourage parents to be an active participant in their child's online activities. Our Site does not target, and is not intended for, users under the age of 18, and we will not knowingly collect Personally Identifiable Information directly from them. You may learn more about protecting children's privacy online by visiting:{' '}
                                <a href="https://www.consumer.ftc.gov/articles/0031-protecting-your-childs-privacy-online" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors inline-flex items-center gap-1">
                                    www.consumer.ftc.gov <ExternalLink className="w-3 h-3" />
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* US State Privacy Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            U.S. State Privacy Rights
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <h4 className="text-white font-semibold mb-3">Nevada Residents: Your Nevada Privacy Rights</h4>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Nevada law (SB 220) requires Website operators to provide a way for Nevada consumers to opt out of the sale of personal identifiable information that the Website operator may collect about them. Please note we do not sell your personal information to third parties as defined in Nevada law, and will not do so in the future without providing you with notice and an opportunity to opt-out of such sale as required by law. If you have any questions regarding our data privacy practices or our compliance with Nevada data privacy law, please contact us.
                            </p>

                            <h4 className="text-white font-semibold mb-3 mt-6">Do-Not-Track Signals</h4>
                            <p className="text-slate-300 leading-relaxed">
                                Some web browsers may transmit "do-not-track" (DNT) signals to sites with which the browser communicates. Because of differences in how web browsers incorporate and activate this feature, it is not always clear whether users intend for these signals to be transmitted, or whether users are even aware of them. Until a universal standard for DNT is set, our Site will not support DNT signals.
                            </p>
                        </div>
                    </section>

                    {/* Hyperlinks */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Your Information and Hyperlinks
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                You might be able to access other websites through our website via hyperlinks. When you do so, you are subjecting yourself to their privacy policies and data collection. Please read the privacy policies of those sites to ensure you agree with the terms before using such sites.
                            </p>
                        </div>
                    </section>

                    {/* Policy Updates */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            Privacy Policy Updates
                        </h2>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <p className="text-slate-300 leading-relaxed">
                                We reserve the right to modify our practices regarding personal data and cookie usage. Any significant changes will be reflected in an updated version of this privacy policy, which will be made available on our website. Users will be notified of any material changes via the email address submitted during the registration process.
                            </p>
                        </div>
                    </section>

                </motion.div>
            </div>
        </main>
    )
}
