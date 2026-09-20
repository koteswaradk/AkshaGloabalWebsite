import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { products } from '../data/products'
import { courses } from '../data/courses'
import { blogPosts } from '../data/blogPosts'
import { playlists } from '../data/studioVideos'

type DeviceType = 'android' | 'ios' | 'desktop'
type ScreenTab = 'home' | 'products' | 'training' | 'studio' | 'blog' | 'contact'

const kmpFiles: Record<string, { language: string; content: string; path: string }> = {
  'App.kt': {
    path: 'composeApp/src/commonMain/kotlin/com/akshaglobals/app/App.kt',
    language: 'kotlin',
    content: `package com.akshaglobals.app

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.akshaglobals.app.data.AkshaRepository
import com.akshaglobals.app.data.Product
import com.akshaglobals.app.theme.AkshaGlobalsTheme

enum class Screen(val title: String) {
    Home("Home"),
    Products("Products"),
    Training("Training"),
    Studio("Studio"),
    Blog("Blog"),
    Contact("Contact")
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun App() {
    AkshaGlobalsTheme {
        var currentScreen by remember { mutableStateOf(Screen.Home) }

        Scaffold(
            topBar = {
                TopAppBar(
                    title = {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Box(
                                modifier = Modifier
                                    .size(36.dp)
                                    .clip(CircleShape)
                                    .background(MaterialTheme.colorScheme.primary),
                                contentAlignment = Alignment.Center
                            ) {
                                Text("A", color = MaterialTheme.colorScheme.onPrimary, fontWeight = FontWeight.Bold)
                            }
                            Spacer(modifier = Modifier.width(10.dp))
                            Text("Aksha Globals", fontWeight = FontWeight.Bold)
                        }
                    }
                )
            },
            bottomBar = {
                NavigationBar {
                    Screen.values().forEach { screen ->
                        NavigationBarItem(
                            selected = currentScreen == screen,
                            onClick = { currentScreen = screen },
                            label = { Text(screen.title) }
                        )
                    }
                }
            }
        ) { padding ->
            Box(modifier = Modifier.padding(padding)) {
                when (currentScreen) {
                    Screen.Home -> HomeScreen()
                    Screen.Products -> ProductsScreen()
                    Screen.Training -> TrainingScreen()
                    Screen.Studio -> StudioScreen()
                    Screen.Blog -> BlogScreen()
                    Screen.Contact -> ContactScreen()
                }
            }
        }
    }
}`
  },
  'AkshaRepository.kt': {
    path: 'composeApp/src/commonMain/kotlin/com/akshaglobals/app/data/AkshaRepository.kt',
    language: 'kotlin',
    content: `package com.akshaglobals.app.data

object AkshaRepository {
    val products = listOf(
        Product(
            id = "devotional",
            name = "Om SaiBaba",
            tagline = "Devotional prayers and aartis",
            category = "Devotional"
        ),
        Product(
            id = "call",
            name = "CallSecure",
            tagline = "Smart spam shield and recording",
            category = "Call"
        ),
        Product(
            id = "meditation",
            name = "Resona",
            tagline = "Mindful breathing and binaural soundscapes",
            category = "Meditation"
        ),
        Product(
            id = "clock",
            name = "Floral Clock Widget",
            tagline = "Artistic botanical analog widgets",
            category = "Clock"
        ),
        Product(
            id = "telephony",
            name = "DriveShield",
            tagline = "Intelligent hands-free driving assistant",
            category = "Telephony"
        )
    )

    const val companyAddress = "23 Tech Park, Hyderabad, Telangana, India 500001"
    const val companyPhone = "+91 98765 43210"
    const val companyEmail = "info@akshaglobals.com"
}`
  },
  'Models.kt': {
    path: 'composeApp/src/commonMain/kotlin/com/akshaglobals/app/data/Models.kt',
    language: 'kotlin',
    content: `package com.akshaglobals.app.data

import kotlinx.serialization.Serializable

@Serializable
data class Product(
    val id: String,
    val name: String,
    val tagline: String,
    val description: String = "",
    val category: String,
    val features: List<String> = emptyList()
)

@Serializable
data class CourseLevel(
    val name: String,
    val duration: String,
    val price: Long,
    val curriculum: List<String>
)

@Serializable
data class Course(
    val id: String,
    val name: String,
    val tagline: String,
    val description: String,
    val icon: String,
    val levels: List<CourseLevel>
)`
  },
  'Theme.kt': {
    path: 'composeApp/src/commonMain/kotlin/com/akshaglobals/app/theme/Theme.kt',
    language: 'kotlin',
    content: `package com.akshaglobals.app.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val M3DarkPrimary = Color(0xFF4FD8EB)
val M3DarkOnPrimary = Color(0xFF00363D)
val M3DarkPrimaryContainer = Color(0xFF004F58)
val M3DarkSurface = Color(0xFF191C1D)
val M3DarkOnSurface = Color(0xFFE1E3E3)

private val DarkColorScheme = darkColorScheme(
    primary = M3DarkPrimary,
    onPrimary = M3DarkOnPrimary,
    primaryContainer = M3DarkPrimaryContainer,
    surface = M3DarkSurface,
    onSurface = M3DarkOnSurface
)

@Composable
fun AkshaGlobalsTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = DarkColorScheme,
        content = content
    )
}`
  },
  'build.gradle.kts (composeApp)': {
    path: 'composeApp/build.gradle.kts',
    language: 'kotlin',
    content: `plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsCompose)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.kotlinSerialization)
}

kotlin {
    androidTarget()
    jvm("desktop")
    listOf(iosX64(), iosArm64(), iosSimulatorArm64()).forEach {
        it.binaries.framework { baseName = "ComposeApp" }
    }
    
    sourceSets {
        commonMain.dependencies {
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material3)
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.kotlinx.serialization.json)
            implementation(libs.ktor.client.core)
        }
    }
}`
  },
  'libs.versions.toml': {
    path: 'gradle/libs.versions.toml',
    language: 'toml',
    content: `[versions]
agp = "8.5.2"
android-compileSdk = "34"
compose-plugin = "1.6.11"
kotlin = "2.0.20"
kotlinx-coroutines = "1.8.1"
ktor = "2.3.12"

[libraries]
kotlinx-coroutines-core = { module = "org.jetbrains.kotlinx:kotlinx-coroutines-core", version.ref = "kotlinx-coroutines" }
ktor-client-core = { module = "io.ktor:ktor-client-core", version.ref = "ktor" }

[plugins]
androidApplication = { id = "com.android.application", version.ref = "agp" }
jetbrainsCompose = { id = "org.jetbrains.compose", version.ref = "compose-plugin" }
compose-compiler = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
kotlinMultiplatform = { id = "org.jetbrains.kotlin.multiplatform", version.ref = "kotlin" }`
  },
  'MainActivity.kt (Android)': {
    path: 'composeApp/src/androidMain/kotlin/com/akshaglobals/app/MainActivity.kt',
    language: 'kotlin',
    content: `package com.akshaglobals.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            App()
        }
    }
}`
  },
  'MainViewController.kt (iOS)': {
    path: 'composeApp/src/iosMain/kotlin/com/akshaglobals/app/MainViewController.kt',
    language: 'kotlin',
    content: `package com.akshaglobals.app

import androidx.compose.ui.window.ComposeUIViewController

fun MainViewController() = ComposeUIViewController { App() }`
  }
}

export default function KmpStudio() {
  const [device, setDevice] = useState<DeviceType>('android')
  const [activeTab, setActiveTab] = useState<ScreenTab>('home')
  const [activeFile, setActiveFile] = useState<string>('App.kt')
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [activeCourseLevel, setActiveCourseLevel] = useState<'Basic' | 'Advanced' | 'Expert'>('Basic')
  const [copied, setCopied] = useState(false)
  const [contactSent, setContactSent] = useState(false)

  const handleCopy = () => {
    const text = kmpFiles[activeFile]?.content || ''
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }

  const currentCourse = courses.find(c => c.id === selectedCourse)
  const currentProd = products.find(p => p.id === selectedProduct)

  return (
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen text-m3-on-surface dark:text-m3-dark-on-surface">
      <SEO
        title="Kotlin Multiplatform (KMP) App Suite"
        description="Explore the Aksha Globals Kotlin Multiplatform (KMP) app architecture sharing 100% of Compose UI and logic across Android, iOS, Desktop & Web."
        path="/kmp"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-cyan-950 via-m3-primary-10 to-teal-950 text-white py-12 border-b border-cyan-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-400/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Kotlin Multiplatform & Compose 1.6+
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Aksha Globals <span className="text-cyan-400">KMP Suite</span>
              </h1>
              <p className="mt-3 text-cyan-100/80 max-w-2xl text-base sm:text-lg">
                One shared codebase written in Kotlin & Compose Multiplatform powering Android, iOS, Desktop, and WebAssembly with 100% shared business logic and Material 3 design.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => downloadFile(activeFile, kmpFiles[activeFile].content)}
                className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download {activeFile}
              </button>
              <Link
                to="/products"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 flex items-center gap-2"
              >
                Browse Web Apps
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Simulator & Code Explorer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Live Compose Multiplatform Interactive Simulator (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full mb-4 flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-wider text-m3-on-surface-variant">
                Live Compose Simulator
              </span>
              {/* Device Selector */}
              <div className="flex gap-1 bg-m3-surface-container dark:bg-m3-dark-surface-container p-1 rounded-full border border-m3-outline-variant dark:border-m3-dark-outline text-xs">
                <button
                  onClick={() => setDevice('android')}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    device === 'android'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-m3-on-surface-variant hover:text-m3-on-surface'
                  }`}
                >
                  Pixel 8 Pro
                </button>
                <button
                  onClick={() => setDevice('ios')}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    device === 'ios'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-m3-on-surface-variant hover:text-m3-on-surface'
                  }`}
                >
                  iPhone 15
                </button>
                <button
                  onClick={() => setDevice('desktop')}
                  className={`px-3 py-1 rounded-full font-medium transition-all ${
                    device === 'desktop'
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'text-m3-on-surface-variant hover:text-m3-on-surface'
                  }`}
                >
                  Desktop
                </button>
              </div>
            </div>

            {/* Device Hardware Frame */}
            <div
              className={`transition-all duration-300 ${
                device === 'desktop'
                  ? 'w-full max-w-xl bg-slate-900 rounded-2xl border-4 border-slate-700 shadow-2xl p-2'
                  : device === 'ios'
                  ? 'w-[340px] h-[680px] bg-slate-900 rounded-[48px] border-[8px] border-slate-700 shadow-2xl p-3 flex flex-col relative'
                  : 'w-[340px] h-[680px] bg-slate-900 rounded-[38px] border-[8px] border-slate-800 shadow-2xl p-2.5 flex flex-col relative'
              }`}
            >
              {/* iOS Notch / Dynamic Island */}
              {device === 'ios' && (
                <div className="w-28 h-6 bg-black rounded-full mx-auto mb-2 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-950 border border-blue-600/40"></div>
                </div>
              )}

              {/* Android Punch Hole Camera */}
              {device === 'android' && (
                <div className="w-full flex justify-between items-center px-4 py-1 text-[11px] text-slate-400 font-mono">
                  <span>10:30</span>
                  <div className="w-3 h-3 rounded-full bg-black border border-slate-700"></div>
                  <div className="flex gap-1 items-center">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>
              )}

              {/* Desktop Window Title Bar */}
              {device === 'desktop' && (
                <div className="flex items-center justify-between pb-2 px-2 border-b border-slate-700/60 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="font-mono text-[11px]">AkshaGlobals - Compose Desktop</span>
                  <span className="w-8"></span>
                </div>
              )}

              {/* Simulator Screen Content */}
              <div className="flex-1 bg-[#121617] text-slate-100 rounded-3xl overflow-hidden flex flex-col border border-slate-800 shadow-inner">
                {/* Compose TopAppBar */}
                <div className="bg-[#191c1d] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-cyan-700 flex items-center justify-center font-bold text-white text-xs">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-xs tracking-tight">Aksha Globals</div>
                      <div className="text-[9px] text-cyan-400 font-medium">Compose Multiplatform</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800/60 text-cyan-300 font-mono">
                    v1.0.0
                  </span>
                </div>

                {/* Main Scrollable Viewport */}
                <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 text-xs">
                  
                  {/* HOME SCREEN */}
                  {activeTab === 'home' && (
                    <div className="space-y-3">
                      {/* Hero Card */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-[#004f58] to-[#00282e] text-white space-y-2 border border-cyan-700/40">
                        <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 text-[10px] font-semibold">
                          Kotlin 2.0 + M3
                        </span>
                        <h4 className="font-extrabold text-sm leading-snug">
                          Empowering Digital Life with Purpose-Built Tech
                        </h4>
                        <p className="text-[11px] text-cyan-100/80 leading-relaxed">
                          From multiplatform mobile apps to AI research and developer training.
                        </p>
                        <div className="pt-1 flex gap-2">
                          <button
                            onClick={() => setActiveTab('products')}
                            className="px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-[11px]"
                          >
                            Explore Apps
                          </button>
                          <button
                            onClick={() => setActiveTab('training')}
                            className="px-3 py-1.5 rounded-full bg-white/10 text-white font-medium text-[11px]"
                          >
                            Training
                          </button>
                        </div>
                      </div>

                      {/* Stat badges */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#1d2021] p-2.5 rounded-xl text-center border border-slate-800">
                          <div className="font-bold text-cyan-400 text-sm">5+</div>
                          <div className="text-[9px] text-slate-400">Live Apps</div>
                        </div>
                        <div className="bg-[#1d2021] p-2.5 rounded-xl text-center border border-slate-800">
                          <div className="font-bold text-cyan-400 text-sm">10K+</div>
                          <div className="text-[9px] text-slate-400">Trained</div>
                        </div>
                        <div className="bg-[#1d2021] p-2.5 rounded-xl text-center border border-slate-800">
                          <div className="font-bold text-cyan-400 text-sm">4.9★</div>
                          <div className="text-[9px] text-slate-400">Rating</div>
                        </div>
                      </div>

                      {/* Featured Apps Preview */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-bold text-xs text-slate-200">Featured Apps</span>
                          <button
                            onClick={() => setActiveTab('products')}
                            className="text-cyan-400 text-[10px] font-medium"
                          >
                            View All →
                          </button>
                        </div>
                        <div className="space-y-2">
                          {products.slice(0, 2).map(p => (
                            <div
                              key={p.id}
                              onClick={() => {
                                setSelectedProduct(p.id)
                                setActiveTab('products')
                              }}
                              className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800 flex items-center gap-3 cursor-pointer hover:border-cyan-600/50 transition-colors"
                            >
                              <div className="w-9 h-9 rounded-lg bg-cyan-900/40 text-cyan-300 font-bold flex items-center justify-center text-xs">
                                {p.category.slice(0, 2)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-bold text-xs truncate">{p.name}</div>
                                <div className="text-[10px] text-slate-400 truncate">{p.tagline}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PRODUCTS SCREEN */}
                  {activeTab === 'products' && (
                    <div className="space-y-3">
                      {currentProd ? (
                        <div className="space-y-3">
                          <button
                            onClick={() => setSelectedProduct(null)}
                            className="text-cyan-400 text-[11px] font-medium"
                          >
                            ← Back to all products
                          </button>
                          <div className="bg-[#1d2021] p-3 rounded-xl border border-slate-800">
                            <div className="font-bold text-sm text-cyan-300">{currentProd.name}</div>
                            <div className="text-[10px] text-cyan-400 mb-2">{currentProd.tagline}</div>
                            <p className="text-[11px] text-slate-300 mb-3">{currentProd.description}</p>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                              Features:
                            </div>
                            <ul className="space-y-1 text-[11px] text-slate-300">
                              {currentProd.features.slice(0, 3).map((f, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-cyan-400">✓</span> {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="font-bold text-xs text-slate-200">Products Catalog ({products.length})</div>
                          {products.map(p => (
                            <div
                              key={p.id}
                              onClick={() => setSelectedProduct(p.id)}
                              className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-colors"
                            >
                              <div className="flex justify-between items-start">
                                <div className="font-bold text-xs text-cyan-300">{p.name}</div>
                                <span className="text-[9px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                                  {p.category}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">{p.tagline}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* TRAINING SCREEN */}
                  {activeTab === 'training' && (
                    <div className="space-y-3">
                      {currentCourse ? (
                        <div className="space-y-2.5">
                          <button
                            onClick={() => setSelectedCourse(null)}
                            className="text-cyan-400 text-[11px] font-medium"
                          >
                            ← Back to tracks
                          </button>
                          <div className="bg-[#1d2021] p-3 rounded-xl border border-slate-800">
                            <div className="font-bold text-sm text-cyan-300">{currentCourse.name}</div>
                            <div className="text-[10px] text-cyan-400 mb-2">{currentCourse.tagline}</div>
                            <div className="flex gap-1.5 mb-2.5">
                              {currentCourse.levels.map(lvl => (
                                <button
                                  key={lvl.name}
                                  onClick={() => setActiveCourseLevel(lvl.name as any)}
                                  className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${
                                    activeCourseLevel === lvl.name
                                      ? 'bg-cyan-600 text-white'
                                      : 'bg-slate-800 text-slate-400'
                                  }`}
                                >
                                  {lvl.name}
                                </button>
                              ))}
                            </div>
                            {(() => {
                              const lvl = currentCourse.levels.find(l => l.name === activeCourseLevel) || currentCourse.levels[0]
                              return (
                                <div>
                                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                                    <span>₹{lvl.price.toLocaleString()}</span>
                                    <span className="text-slate-400 font-normal">{lvl.duration}</span>
                                  </div>
                                  <div className="space-y-1 text-[10px] text-slate-300">
                                    {lvl.curriculum.slice(0, 3).map((item, idx) => (
                                      <div key={idx} className="flex gap-1.5">
                                        <span className="text-cyan-400">•</span>
                                        <span>{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )
                            })()}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="font-bold text-xs text-slate-200">Training Tracks</div>
                          {courses.map(c => (
                            <div
                              key={c.id}
                              onClick={() => setSelectedCourse(c.id)}
                              className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-colors"
                            >
                              <div className="flex justify-between items-center">
                                <div className="font-bold text-xs">{c.name}</div>
                                <span className="text-[10px] text-amber-400">{c.rating}★</span>
                              </div>
                              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{c.tagline}</p>
                              <div className="mt-2 text-[10px] text-cyan-400 font-medium">
                                Starts at ₹{c.levels[0].price.toLocaleString()} →
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STUDIO SCREEN */}
                  {activeTab === 'studio' && (
                    <div className="space-y-2.5">
                      <div className="font-bold text-xs text-slate-200">Aksha Studios Media</div>
                      <p className="text-[10px] text-slate-400">
                        Devotional bhajans, animated nursery rhymes, and moral tales.
                      </p>
                      {playlists.map(pl => (
                        <div key={pl.id} className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-xs text-cyan-300">{pl.title}</span>
                            <span className="text-[9px] text-slate-400">{pl.videos.length} videos</span>
                          </div>
                          {pl.videos.slice(0, 1).map(v => (
                            <div key={v.id} className="text-[10px] text-slate-300 flex items-center gap-1.5 mt-1.5">
                              <span className="text-cyan-400">▶</span> {v.title}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* BLOG SCREEN */}
                  {activeTab === 'blog' && (
                    <div className="space-y-2.5">
                      <div className="font-bold text-xs text-slate-200">Insights & Tech Articles</div>
                      {blogPosts.map(post => (
                        <div key={post.id} className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800">
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                            {post.category}
                          </span>
                          <div className="font-bold text-xs mt-1.5 text-slate-100">{post.title}</div>
                          <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">{post.excerpt}</p>
                          <div className="mt-1.5 text-[9px] text-slate-500">
                            {post.author} · {post.readTime}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CONTACT SCREEN */}
                  {activeTab === 'contact' && (
                    <div className="space-y-2.5">
                      <div className="font-bold text-xs text-slate-200">Get in Touch</div>
                      <div className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800 text-[11px] space-y-1.5 text-slate-300">
                        <div>📍 23 Tech Park, Hyderabad, India</div>
                        <div>📞 +91 98765 43210</div>
                        <div>✉️ info@akshaglobals.com</div>
                      </div>
                      <div className="bg-[#1d2021] p-2.5 rounded-xl border border-slate-800 space-y-2">
                        <div className="font-bold text-[11px]">Send Message (Simulated)</div>
                        {contactSent ? (
                          <div className="p-2 rounded bg-cyan-950 text-cyan-300 text-[10px]">
                            ✓ Message sent to Aksha team!
                          </div>
                        ) : (
                          <button
                            onClick={() => setContactSent(true)}
                            className="w-full py-1.5 rounded-full bg-cyan-600 text-white font-semibold text-[10px]"
                          >
                            Send Quick Inquiry
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Compose NavigationBar (Bottom Tabs) */}
                <div className="bg-[#191c1d] border-t border-slate-800/80 px-2 py-1.5 flex justify-around items-center">
                  {[
                    { id: 'home', label: 'Home', icon: '🏠' },
                    { id: 'products', label: 'Apps', icon: '📱' },
                    { id: 'training', label: 'Learn', icon: '🎓' },
                    { id: 'blog', label: 'Blog', icon: '📰' },
                    { id: 'contact', label: 'Contact', icon: '📍' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id as ScreenTab)
                        setSelectedProduct(null)
                        setSelectedCourse(null)
                      }}
                      className={`flex flex-col items-center py-1 px-2 rounded-lg transition-colors cursor-pointer ${
                        activeTab === tab.id
                          ? 'text-cyan-400 font-bold bg-cyan-950/60'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-xs">{tab.icon}</span>
                      <span className="text-[9px] mt-0.5">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* iOS Home Bar */}
              {device === 'ios' && (
                <div className="w-32 h-1 bg-slate-500/50 rounded-full mx-auto mt-2"></div>
              )}
            </div>
          </div>

          {/* RIGHT: KMP Source Code Explorer (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-3xl p-6 border border-m3-outline-variant dark:border-m3-dark-outline shadow-m3-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-m3-outline-variant dark:border-m3-dark-outline">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2 text-m3-on-surface dark:text-m3-dark-on-surface">
                  <span className="text-cyan-500">❖</span> KMP Project Structure
                </h3>
                <p className="text-xs text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant mt-0.5">
                  Inspect Compose Multiplatform commonMain sources, Android/iOS targets & build scripts
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-m3-surface-container dark:bg-m3-dark-surface-container hover:bg-m3-primary dark:hover:bg-m3-dark-primary hover:text-white transition-colors flex items-center gap-1.5 border border-m3-outline-variant cursor-pointer"
                >
                  {copied ? '✓ Copied!' : 'Copy File'}
                </button>
                <button
                  onClick={() => downloadFile(activeFile, kmpFiles[activeFile].content)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  Download
                </button>
              </div>
            </div>

            {/* File Switcher Tabs */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {Object.keys(kmpFiles).map(fileName => (
                <button
                  key={fileName}
                  onClick={() => setActiveFile(fileName)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                    activeFile === fileName
                      ? 'bg-cyan-600 text-white font-bold shadow-sm'
                      : 'bg-m3-surface-container dark:bg-m3-dark-surface-container text-m3-on-surface-variant hover:text-m3-on-surface'
                  }`}
                >
                  {fileName}
                </button>
              ))}
            </div>

            {/* File Path Indicator */}
            <div className="mt-3 px-3 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center justify-between">
              <span className="truncate">{kmpFiles[activeFile]?.path}</span>
              <span className="text-slate-400 uppercase text-[10px] ml-2">
                {kmpFiles[activeFile]?.language}
              </span>
            </div>

            {/* Code Content Display */}
            <div className="mt-3 rounded-2xl bg-[#0d1117] border border-slate-800 overflow-hidden shadow-inner">
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto max-h-[500px] leading-relaxed select-all">
                <code>{kmpFiles[activeFile]?.content}</code>
              </pre>
            </div>

            {/* Architecture Highlights */}
            <div className="mt-6 pt-6 border-t border-m3-outline-variant dark:border-m3-dark-outline grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-m3-surface-container dark:bg-m3-dark-surface-container">
                <div className="font-bold text-cyan-400 mb-1">100% Shared UI</div>
                <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                  Jetpack Compose & Compose Multiplatform 1.6 renders identical UI natively on Android, iOS & Desktop.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-m3-surface-container dark:bg-m3-dark-surface-container">
                <div className="font-bold text-cyan-400 mb-1">Type-Safe Models</div>
                <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                  Kotlinx Serialization & Coroutines manage product data, course catalogs, and studio playlists.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-m3-surface-container dark:bg-m3-dark-surface-container">
                <div className="font-bold text-cyan-400 mb-1">Native LLVM on iOS</div>
                <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant">
                  Compiles to arm64 machine code frameworks integrated directly via Swift & SwiftUI.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
