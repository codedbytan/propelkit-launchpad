import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to Integrate GST in Your Next.js SaaS',
    excerpt: 'A complete guide to adding GST invoicing and tax calculations for Indian SaaS products.',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Razorpay Webhooks Explained',
    excerpt: 'Learn how to handle payment confirmations, refunds, and subscription events with webhooks.',
    readTime: '6 min read',
    date: 'Dec 10, 2024',
    category: 'Payments',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: '5 Mistakes When Building Your First SaaS',
    excerpt: 'Common pitfalls that cost indie hackers months of work — and how PropelKit helps you avoid them.',
    readTime: '5 min read',
    date: 'Dec 5, 2024',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">From the Blog</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            Learn to <span className="text-gradient">build better</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutorials, insights, and best practices for building successful SaaS products in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
