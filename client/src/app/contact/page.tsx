import { Instagram } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h1 className="text-4xl font-bold text-secondary mb-6">Contact Us</h1>
            <p className="text-xl text-text leading-relaxed mb-8">
                Have questions or suggestions? We'd love to hear from you.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-lg mx-auto">
                <div className="space-y-4">
                    <p className="flex items-center justify-center gap-2">
                        <strong>Email:</strong> midhunmanoj05122005@gmail.com
                    </p>
                    <p className="flex items-center justify-center gap-2">
                        <strong>Phone:</strong> +91 7907239340
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                        <p className="font-bold mb-3">Connect with me:</p>
                        <a
                            href="https://www.instagram.com/midhun_manoj_05"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition shadow-md hover:shadow-lg"
                        >
                            <Instagram className="w-5 h-5" />
                            Follow on Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
