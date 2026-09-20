package com.akshaglobals.app.data

object AkshaRepository {
    val products = listOf(
        Product(
            id = "devotional",
            name = "Om SaiBaba",
            tagline = "Devotional prayers, aartis, and spiritual wisdom at your fingertips",
            description = "A serene devotional app dedicated to Shirdi Sai Baba, featuring daily prayers, kakad and dhoop aartis, inspirational quotes, and spiritual stories to guide your daily meditation and faith.",
            icon = "./product-icons/om-saibaba.png",
            category = "Devotional",
            features = listOf(
                "Daily morning and evening Aarti audio with lyrics in multiple languages",
                "HD wallpaper gallery of Sai Baba with easy set-as-wallpaper options",
                "Sai Satcharitra daily reading chapters with bookmarking",
                "Offline audio playback mode for uninterrupted prayers",
                "Daily positive thoughts and Baba's 11 promises reminder"
            ),
            specs = listOf(
                ProductSpec("Platform", "Android & iOS"),
                ProductSpec("Version", "2.4.1"),
                ProductSpec("Size", "35 MB"),
                ProductSpec("Rating", "4.8 ★ (12,000+ reviews)"),
                ProductSpec("Downloads", "500,000+")
            ),
            playStoreUrl = "https://play.google.com/store/apps",
            appStoreUrl = "https://apps.apple.com"
        ),
        Product(
            id = "call",
            name = "CallSecure",
            tagline = "Caller identification, spam protection, and smart call recording",
            description = "A privacy-first dialer and call protection tool that shields you from fraudulent calls, telemarketers, and automated robocalls while providing automated call recording and contact backups.",
            icon = "./product-icons/callsecure.png",
            category = "Call",
            features = listOf(
                "AI-powered spam detection and proactive robocall blocker",
                "Caller ID with business directory and social identification",
                "High-definition call recorder with cloud backup support",
                "Smart contact search with T9 dialer and favorite speed-dials",
                "Encrypted offline call logs ensuring full user privacy"
            ),
            specs = listOf(
                ProductSpec("Platform", "Android"),
                ProductSpec("Version", "1.9.0"),
                ProductSpec("Size", "22 MB"),
                ProductSpec("Rating", "4.6 ★ (8,500+ reviews)"),
                ProductSpec("Downloads", "200,000+")
            ),
            playStoreUrl = "https://play.google.com/store/apps"
        ),
        Product(
            id = "meditation",
            name = "Resona",
            tagline = "Mindful breathing, ambient soundscapes, and restful sleep",
            description = "Resona guides your daily wellness journey through binaural beats, ambient soundscapes, guided box-breathing timers, and sleep stories designed to calm anxious minds.",
            icon = "./product-icons/resona.png",
            category = "Meditation",
            features = listOf(
                "40+ nature soundscapes: rain, deep forest, ocean waves, campfire",
                "Customizable breathing cycles: Box breathing, 4-7-8 relaxing breath",
                "Binaural frequency tracks for deep focus, flow state, and delta sleep",
                "Smart timer with auto-fadeout when you drift off to sleep",
                "Daily mindfulness streak tracker and gentle habit reminders"
            ),
            specs = listOf(
                ProductSpec("Platform", "Android & iOS"),
                ProductSpec("Version", "3.1.2"),
                ProductSpec("Size", "48 MB"),
                ProductSpec("Rating", "4.9 ★ (25,000+ reviews)"),
                ProductSpec("Downloads", "1,000,000+")
            ),
            playStoreUrl = "https://play.google.com/store/apps",
            appStoreUrl = "https://apps.apple.com"
        ),
        Product(
            id = "clock",
            name = "Floral Clock Widget",
            tagline = "Artistic botanical analog and digital home screen clock widgets",
            description = "Transform your phone's home screen with aesthetic floral clock widgets, blooming seasonal themes, second-accurate timekeeping, and integrated battery and weather indicators.",
            icon = "./product-icons/floral-clock.png",
            category = "Clock",
            features = listOf(
                "50+ floral hand-drawn clock styles with matching lock screens",
                "Custom font, petal palette, and background opacity picker",
                "Battery percentage and live weather temperature integration",
                "Zero battery drain background update architecture",
                "Supports light & dark system appearance matching"
            ),
            specs = listOf(
                ProductSpec("Platform", "Android & iOS"),
                ProductSpec("Version", "1.3.5"),
                ProductSpec("Size", "18 MB"),
                ProductSpec("Rating", "4.7 ★ (4,200+ reviews)"),
                ProductSpec("Downloads", "150,000+")
            ),
            playStoreUrl = "https://play.google.com/store/apps",
            appStoreUrl = "https://apps.apple.com"
        ),
        Product(
            id = "telephony",
            name = "DriveShield",
            tagline = "Intelligent hands-free driving assistant & call filter",
            description = "DriveShield keeps you focused on the road while staying safely connected by intelligently managing incoming calls, auto-replying via SMS, and filtering distractions.",
            icon = "./product-icons/driveshield.png",
            category = "Telephony",
            features = listOf(
                "Smart Driving Mode: One-tap automated protective barrier",
                "Auto-reply SMS to designated contacts when behind the wheel",
                "Priority VIP caller override for urgent family emergencies",
                "Full local contact processing without uploading privacy data",
                "Driving trip safety score and quiet hour analytics"
            ),
            specs = listOf(
                ProductSpec("Platform", "Android & iOS"),
                ProductSpec("Version", "2.0.4"),
                ProductSpec("Size", "29 MB"),
                ProductSpec("Rating", "4.8 ★ (9,100+ reviews)"),
                ProductSpec("Downloads", "350,000+")
            ),
            playStoreUrl = "https://play.google.com/store/apps",
            appStoreUrl = "https://apps.apple.com"
        )
    )

    val courses = listOf(
        Course(
            id = "android-dev",
            name = "Android Development",
            tagline = "Modern Android with Kotlin, Jetpack Compose, Coroutines & Architecture",
            description = "Complete industry-ready Android engineer track from fundamentals to advanced Clean Architecture, Jetpack Compose, Room, Flow, and Play Store publishing.",
            icon = "🤖",
            color = "from-emerald-700 to-teal-900",
            students = "3,200+",
            rating = 4.9,
            instructor = "Senior Google Android Architect",
            levels = listOf(
                CourseLevel("Basic", "4 Weeks", 7999, listOf(
                    "Kotlin Core syntax, OOP & Functional Programming",
                    "Android Studio setup & Project Anatomy",
                    "Jetpack Compose fundamentals: Rows, Columns, Modifiers",
                    "State management with remember and mutableStateOf",
                    "Building your first interactive calculator & notes app"
                )),
                CourseLevel("Advanced", "8 Weeks", 14999, listOf(
                    "ViewModel, StateFlow & SharedFlow reactive streams",
                    "Room Database & DataStore Preferences",
                    "Retrofit & Ktor networking with Moshi/Kotlinx Serialization",
                    "Navigation Compose with deep links and animations",
                    "Dependency injection using Hilt and Koin"
                )),
                CourseLevel("Expert", "12 Weeks", 24999, listOf(
                    "Clean Architecture + MVI/MVVM design patterns",
                    "Kotlin Coroutines advanced internals and dispatchers",
                    "Unit & UI Testing with Mockk, Turbine & Compose Test Rules",
                    "CI/CD with GitHub Actions & Play Store deployment pipeline",
                    "Capstone Project: Full enterprise ride-sharing / e-commerce app"
                ))
            )
        ),
        Course(
            id = "ios-dev",
            name = "iOS Development",
            tagline = "Swift 6, SwiftUI, SwiftData, and App Store Masterclass",
            description = "Master native iOS engineering with modern declarative SwiftUI, Combine, SwiftData, async/await concurrency, and modern Apple design standards.",
            icon = "🍎",
            color = "from-blue-700 to-indigo-900",
            students = "2,400+",
            rating = 4.8,
            instructor = "Lead Apple Ecosystem Architect",
            levels = listOf(
                CourseLevel("Basic", "4 Weeks", 8999, listOf(
                    "Swift 6 modern syntax, optionals, enums and structs",
                    "Xcode environment, canvas previews and asset catalogs",
                    "SwiftUI views: VStack, HStack, List, and LazyVGrid",
                    "State management with @State and @Binding",
                    "Building clean weather and tip calculator apps"
                )),
                CourseLevel("Advanced", "8 Weeks", 16999, listOf(
                    "@Observable macro and SwiftUI architecture",
                    "SwiftData and Core Data persistence",
                    "Async/await, Actors, and structured concurrency",
                    "URLSession REST API integration with Codable",
                    "Custom animations, transitions and gesture recognizers"
                )),
                CourseLevel("Expert", "12 Weeks", 26999, listOf(
                    "Modular iOS Architecture with SPM packages",
                    "Widgets, Live Activities, and Dynamic Island integrations",
                    "In-App Purchases with StoreKit 2",
                    "Unit testing, Snapshot testing & TestFlight releases",
                    "Production Capstone: Fitness Tracker with HealthKit"
                ))
            )
        ),
        Course(
            id = "genai-ml",
            name = "Generative AI & Machine Learning",
            tagline = "LLMs, Gemini APIs, RAG, LangChain, and Enterprise AI deployment",
            description = "Hands-on generative AI training covering Gemini 2.5, embeddings, vector databases, Retrieval-Augmented Generation (RAG), and agentic workflows.",
            icon = "🧠",
            color = "from-purple-700 to-indigo-950",
            students = "4,100+",
            rating = 4.95,
            instructor = "Principal AI Research Engineer",
            levels = listOf(
                CourseLevel("Basic", "4 Weeks", 9999, listOf(
                    "Python for AI and PyTorch essentials",
                    "Foundational concepts of Transformers and Large Language Models",
                    "Working with Gemini 2.5 Flash and Pro APIs",
                    "Structured JSON outputs and prompt templating",
                    "Building an AI customer support chatbot"
                )),
                CourseLevel("Advanced", "8 Weeks", 18999, listOf(
                    "Vector embeddings and similarity search with ChromaDB & Pinecone",
                    "Building production RAG pipelines on proprietary documents",
                    "Function calling and external tool use with Gemini SDK",
                    "Multi-modal inputs: Audio, Image, and Video reasoning",
                    "Fine-tuning models and LoRA parameter-efficient adaptation"
                )),
                CourseLevel("Expert", "12 Weeks", 29999, listOf(
                    "Autonomous Agent architectures: LangGraph & CrewAI",
                    "Streaming real-time conversational agents via WebSockets",
                    "Enterprise AI security, guardrails, and evaluation benchmarks",
                    "Cloud deployment with Google Cloud Run & Vertex AI",
                    "Capstone: Autonomous Corporate Research & Report Agent"
                ))
            )
        ),
        Course(
            id = "kmp-dev",
            name = "Kotlin Multiplatform (KMP)",
            tagline = "Share logic, networking, and UI across Android, iOS, Desktop & Web",
            description = "Become a full-stack multiplatform engineer sharing 100% of business logic and Compose Multiplatform UI across Android, iOS, Desktop, and Web.",
            icon = "🚀",
            color = "from-cyan-700 to-teal-950",
            students = "1,850+",
            rating = 4.9,
            instructor = "JetBrains Certified KMP Specialist",
            levels = listOf(
                CourseLevel("Basic", "4 Weeks", 8499, listOf(
                    "Kotlin Multiplatform architecture & Gradle configuration",
                    "expect/actual pattern and platform abstractions",
                    "Ktor multiplatform HTTP client & JSON serialization",
                    "SQLDelight and Room for multiplatform local databases",
                    "First KMP shared library consumed by native Android and iOS"
                )),
                CourseLevel("Advanced", "8 Weeks", 15999, listOf(
                    "Compose Multiplatform declarative UI for Android and iOS",
                    "Voyager & Decompose navigation across platforms",
                    "Koin dependency injection in common code",
                    "Cocoapods vs SPM iOS framework integration",
                    "Building a cross-platform Social Feed app"
                )),
                CourseLevel("Expert", "12 Weeks", 25999, listOf(
                    "Targeting Desktop (macOS/Windows/Linux) and Web (Wasm)",
                    "Native platform bridges, camera and sensor access",
                    "Multi-module KMP enterprise architecture",
                    "Automated multiplatform CI/CD and release pipelines",
                    "Production Capstone: Complete Multiplatform Aksha Globals Suite"
                ))
            )
        )
    )

    val blogPosts = listOf(
        BlogPost(
            id = "kmp-future-mobile",
            title = "Why Kotlin Multiplatform is Winning Mobile Engineering in 2026",
            excerpt = "How KMP solved the dilemma between 100% native performance and cross-platform code sharing without compromising UX.",
            content = listOf(
                "Mobile engineering has long swung between two extremes: pure native development with doubled team costs, or hybrid web-view wrappers that compromise on 120Hz smooth interactions.",
                "Kotlin Multiplatform shifts this paradigm completely. By compiling directly to native machine code on iOS (via Kotlin/Native LLVM) and JVM bytecode on Android, apps achieve identical runtime performance to hand-crafted Swift and Kotlin apps.",
                "With Compose Multiplatform reaching maturity across iOS, desktop, and WebAssembly, teams can now share both business logic and UI while preserving native access whenever needed.",
                "At Aksha Globals, we build our core products using KMP to accelerate feature delivery by 40% while preserving the fluid Material 3 and Cupertino experiences our users expect."
            ),
            category = "Mobile Dev",
            author = "Koteswara Rao",
            date = "March 15, 2026",
            readTime = "5 min read",
            tags = listOf("KMP", "Kotlin", "Compose", "Android", "iOS"),
            icon = "📱",
            color = "from-cyan-600 to-teal-800"
        ),
        BlogPost(
            id = "gemini-2-5-enterprise",
            title = "Architecting Enterprise AI Agents with Gemini 2.5",
            excerpt = "Practical patterns for structured output, tool calling, and low-latency agentic loops in production systems.",
            content = listOf(
                "Generative AI has evolved from novelty chatbots into mission-critical workflow automation agents. The key breakthrough is reliable tool calling and strict schema enforcement.",
                "With Gemini 2.5 Flash and Pro models, developers can define JSON schemas and tools that allow models to invoke databases, query enterprise search, and execute calculations with near-zero hallucination.",
                "We explore how combining semantic vector caching with real-time streaming creates customer-facing experiences with sub-second response times.",
                "Read our step-by-step guide to deploying containerized AI endpoints on Google Cloud Run with comprehensive guardrails."
            ),
            category = "Generative AI",
            author = "AI Research Team",
            date = "March 10, 2026",
            readTime = "7 min read",
            tags = listOf("Gemini", "AI Agents", "Python", "Cloud Run"),
            icon = "🤖",
            color = "from-purple-600 to-indigo-900"
        ),
        BlogPost(
            id = "material-3-expressive",
            title = "Designing with Material 3: Beyond Colors to Sensory Rhythm",
            excerpt = "How subtle elevation, tonal palettes, and expressive typography transform standard utilities into memorable daily tools.",
            content = listOf(
                "Design systems are often treated as mere collections of hex codes and button radii. Material 3, however, is a study in optical hierarchy.",
                "By anchoring backgrounds in neutral dark tones and reserving high-chroma cyan and teal for intentional primary actions, interfaces feel calm yet responsive.",
                "In this article, we break down the spacing arithmetic, corner radiuses, and accessibility standards implemented across the Aksha Globals product line."
            ),
            category = "Design",
            author = "UI/UX Lead",
            date = "March 02, 2026",
            readTime = "4 min read",
            tags = listOf("M3", "Tailwind", "Compose", "UI/UX"),
            icon = "🎨",
            color = "from-emerald-600 to-teal-900"
        )
    )

    val playlists = listOf(
        Playlist(
            id = "devotional",
            title = "Divine Devotionals & Sacred Bhajans",
            category = "devotional",
            count = 12,
            thumbnail = "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=80",
            videos = listOf(
                StudioVideo(
                    id = "shirdi-sai-aarti",
                    title = "Shirdi Sai Baba Kakad Aarti (Morning Devotion)",
                    category = "devotional",
                    thumbnailUrl = "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=80",
                    youtubeId = "dQw4w9WgXcQ",
                    views = "142K",
                    duration = "14:20",
                    description = "Sacred morning prayers and peaceful chants bringing harmony to your home."
                ),
                StudioVideo(
                    id = "om-namah-shivaya",
                    title = "Om Namah Shivaya - 108 Meditative Chants",
                    category = "devotional",
                    thumbnailUrl = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80",
                    youtubeId = "dQw4w9WgXcQ",
                    views = "89K",
                    duration = "22:15",
                    description = "Continuous meditative acoustic soundscape with traditional tanpura."
                )
            )
        ),
        Playlist(
            id = "rhymes",
            title = "Joyful Animated Rhymes & Kids Songs",
            category = "rhymes",
            count = 18,
            thumbnail = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80",
            videos = listOf(
                StudioVideo(
                    id = "twinkle-star",
                    title = "Twinkle Twinkle Little Star - 3D Animation",
                    category = "rhymes",
                    thumbnailUrl = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop&q=80",
                    youtubeId = "dQw4w9WgXcQ",
                    views = "450K",
                    duration = "3:10",
                    description = "Delightful bedtime lullaby animation for toddlers and young children."
                )
            )
        ),
        Playlist(
            id = "stories",
            title = "Captivating Moral Tales & Panchatantra Stories",
            category = "stories",
            count = 15,
            thumbnail = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
            videos = listOf(
                StudioVideo(
                    id = "the-clever-crow",
                    title = "The Clever Crow & The Pitcher of Water",
                    category = "stories",
                    thumbnailUrl = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80",
                    youtubeId = "dQw4w9WgXcQ",
                    views = "210K",
                    duration = "6:45",
                    description = "Timeless fable teaching persistence, problem solving, and patience."
                )
            )
        )
    )

    const val companyAddress = "23 Tech Park, Hyderabad, Telangana, India 500001"
    const val companyPhone = "+91 98765 43210"
    const val companyEmail = "info@akshaglobals.com"
}
