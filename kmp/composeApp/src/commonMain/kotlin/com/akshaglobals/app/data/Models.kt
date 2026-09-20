package com.akshaglobals.app.data

import kotlinx.serialization.Serializable

@Serializable
data class ProductSpec(
    val label: String,
    val value: String
)

@Serializable
data class Product(
    val id: String,
    val name: String,
    val tagline: String,
    val description: String,
    val icon: String,
    val category: String,
    val features: List<String>,
    val specs: List<ProductSpec>,
    val playStoreUrl: String? = null,
    val appStoreUrl: String? = null,
    val color: String = "from-cyan-600 to-teal-800"
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
    val color: String,
    val students: String,
    val rating: Double,
    val instructor: String,
    val levels: List<CourseLevel>
)

@Serializable
data class BlogPost(
    val id: String,
    val title: String,
    val excerpt: String,
    val content: List<String>,
    val category: String,
    val author: String,
    val date: String,
    val readTime: String,
    val tags: List<String>,
    val icon: String,
    val color: String
)

@Serializable
data class StudioVideo(
    val id: String,
    val title: String,
    val category: String,
    val thumbnailUrl: String,
    val youtubeId: String,
    val views: String,
    val duration: String,
    val description: String
)

@Serializable
data class Playlist(
    val id: String,
    val title: String,
    val category: String,
    val count: Int,
    val thumbnail: String,
    val videos: List<StudioVideo>
)
