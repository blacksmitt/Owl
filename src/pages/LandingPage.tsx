import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Code, Clock, CheckCircle, Star, Users, Globe, Lock, TrendingUp, Smartphone, CreditCard, DollarSign, BarChart3, Headphones, Award, ArrowUpRight, Menu, X } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const features = [
    {
      icon: Clock,
      title: 'Instant Payments',
      description: 'Receive cryptocurrency payments in seconds with real-time confirmations and instant notifications.'
    },
    {
      icon: Shield,
      title: 'Non-Custodial Security',
      description: 'Your keys, your coins. We never hold your cryptocurrency - payments go directly to your wallet.'
    },
    {
      icon: Code,
      title: 'Developer-First API',
      description: 'Simple REST API, webhooks, and SDKs for seamless integration into any platform or application.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Accept payments from anywhere in the world without geographical restrictions or banking limitations.'
    },
    {
      icon: Lock,
      title: 'Privacy Protected',
      description: 'No KYC required. Protect your customers\' privacy while maintaining full compliance.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect payment experience on any device with responsive design and mobile-first approach.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Lower Fees',
      description: 'Save up to 90% on transaction fees compared to traditional payment processors.',
      highlight: 'Save 90%'
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversion',
      description: 'Increase sales with crypto-native customers who prefer digital payments.',
      highlight: '+25% Sales'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track payments, monitor performance, and optimize your revenue streams.',
      highlight: 'Live Data'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help when you need it with our dedicated technical support team.',
      highlight: 'Always Here'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      content: 'Owl transformed our payment system. We saw a 40% increase in conversions within the first month.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, DigitalCraft',
      content: 'The API integration was seamless. Our developers had it running in production within hours.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Watson',
      role: 'CTO, InnovateLab',
      content: 'Finally, a crypto payment solution that just works. No complexity, no hassle, just results.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { value: '$50M+', label: 'Processed Volume' },
    { value: '10K+', label: 'Active Merchants' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries' }
  ];

  const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC', color: 'text-orange-400' },
    { name: 'Ethereum', symbol: 'ETH', color: 'text-blue-400' },
    { name: 'USDT', symbol: 'USDT', color: 'text-green-400' },
    { name: 'Litecoin', symbol: 'LTC', color: 'text-gray-400' },
    { name: 'Bitcoin Cash', symbol: 'BCH', color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50">
      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Owl</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Features</a>
              <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Benefits</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Reviews</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Pricing</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/dashboard" 
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/dashboard"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Features</a>
                <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Benefits</a>
                <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Reviews</a>
                <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Pricing</a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  <Link to="/dashboard" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">
                    Sign In
                  </Link>
                  <Link
                    to="/dashboard"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234f46e5%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Trusted by 10,000+ merchants worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
              Accept Crypto Payments
              <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Without the Hassle
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The most secure, privacy-first way for businesses to accept Bitcoin, Ethereum, and stablecoins. 
              No KYC required, instant settlements, and developer-friendly APIs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/dashboard"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Start Accepting Payments</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/payment-links"
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 backdrop-blur-sm"
              >
                Try Demo Payment
              </Link>
            </div>

            {/* Supported Cryptocurrencies */}
            <div className="pt-12">
              <p className="text-slate-500 text-sm mb-6">Supported Cryptocurrencies</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {cryptos.map((crypto, index) => (
                  <div key={index} className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <div className={`w-3 h-3 rounded-full bg-current ${crypto.color}`}></div>
                    <span className="text-slate-700 font-medium">{crypto.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Accept Crypto
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built for modern businesses that want to embrace the future of payments without compromising on security or user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose Owl?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join thousands of businesses already benefiting from our crypto payment solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                        <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                          {benefit.highlight}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Loved by Developers & Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See what our customers have to say about their experience with Owl.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No hidden fees, no monthly charges. Pay only when you receive payments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Starter Plan */}
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
                  <p className="text-slate-600 mb-6">Perfect for small businesses</p>
                  <div className="text-4xl font-bold text-slate-900 mb-2">1.5%</div>
                  <p className="text-slate-500">per transaction</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Up to $10K monthly volume</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">All major cryptocurrencies</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Basic API access</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Email support</span>
                  </li>
                </ul>
                <Link
                  to="/dashboard"
                  className="w-full px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                  <p className="text-slate-600 mb-6">For growing businesses</p>
                  <div className="text-4xl font-bold text-slate-900 mb-2">0.8%</div>
                  <p className="text-slate-500">per transaction</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Unlimited monthly volume</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">All cryptocurrencies + custom tokens</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Full API access + webhooks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-600">Advanced analytics</span>
                  </li>
                </ul>
                <Link
                  to="/dashboard"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-center block"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Accepting Crypto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Owl to accept cryptocurrency payments. 
            Get started in minutes, no technical expertise required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="group px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Create Your Account</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/payment-links"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Owl</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                The most secure and privacy-first way to accept cryptocurrency payments. 
                Built for businesses that value simplicity and security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-slate-400 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors duration-200">Dashboard</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Status</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Owl. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;