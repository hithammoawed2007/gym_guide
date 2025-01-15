const gymsData = {
    cairo: {
        // مدينة نصر
        nasr_city: [
            {
                name: "جيم المنشاوي",
                branch: "أسيوط",
                location: "شارع المحطة، المعلمين، أسيوط",
                rating: 5,
                features: [
                    "كمال أجسام",
                    "كارديو",
                    "سباحة",
                    "جيم سيدات",
                    "ساونا"
                ],
                price: 1000,
                image: "manshawy_gym.jpg",
                phone: "0882222222"
            },
            {
                name: "World Gym",
                branch: "الحي العاشر",
                location: "شارع حسن المأمون، الحي العاشر، مدينة نصر",
                rating: 4,
                features: ["كمال أجسام", "كروس فت", "MMA", "جيم سيدات", "كيك بوكسينج"],
                price: 1000,
                image: "world_gym_nasr.jpg",
                phone: "0222876543"
            },
            {
                name: "Fitness First",
                branch: "سيتي ستارز",
                location: "سيتي ستارز مول، الدور الثالث، مدينة نصر",
                rating: 5,
                features: ["كمال أجسام", "يوجا", "سباحة", "جيم سيدات", "سبا", "تدريب شخصي"],
                price: 1500,
                image: "fitness_first_stars.jpg",
                phone: "0222876544"
            },
            {
                name: "جيم المنشاوي",
                branch: "أسيوط",
                location: "المعلمين",
                rating: 5,
                features: [
                    "كمال أجسام",
                    "كارديو",
                    "سباحة",
                    "جيم سيدات",
                    "ساونا"
                ],
                price: 1000,
                image: "path_to_image.jpg",
                phone: "02XXXXXXXX"
            }
        ],

        // المعادي
        maadi: [
            {
                name: "Hard Core Gym",
                branch: "المعادي",
                location: "شارع 9، المعادي",
                rating: 4,
                features: ["كمال أجسام", "كروس فت", "كارديو", "جيم سيدات"],
                price: 800,
                image: "hardcore_maadi.jpg",
                phone: "0223598741"
            },
            {
                name: "Be Fit",
                branch: "دجلة المعادي",
                location: "شارع 233، دجلة المعادي",
                rating: 5,
                features: ["كمال أجسام", "TRX", "كارديو", "جيم سيدات", "يوجا"],
                price: 1100,
                image: "befit_maadi.jpg",
                phone: "0223598742"
            }
        ],

        // مصر الجديدة
        heliopolis: [
            {
                name: "Power Gym",
                branch: "مصر الجديدة",
                location: "شارع الحجاز، مصر الجديدة",
                rating: 4,
                features: ["كمال أجسام", "كارديو", "كيك بوكسينج", "جيم سيدات"],
                price: 900,
                image: "power_heliopolis.jpg",
                phone: "0226587412"
            },
            {
                name: "Transform Gym",
                branch: "الميرغني",
                location: "شارع الميرغني، مصر الجديدة",
                rating: 5,
                features: ["كمال أجسام", "كروس فت", "سباحة", "جيم سيدات", "ساونا"],
                price: 1300,
                image: "transform_heliopolis.jpg",
                phone: "0226587413"
            }
        ],

        // وسط البلد
        downtown: [
            {
                name: "Cairo Gym",
                branch: "وسط البلد",
                location: "شارع طلعت حرب، وسط البلد",
                rating: 3,
                features: ["كمال أجسام", "كارديو", "تدريب شخصي"],
                price: 500,
                image: "cairo_downtown.jpg",
                phone: "0225896314"
            }
        ],

        // إضافة منطقة جديدة
        new_area: [
            {
                name: "اسم الصالة",
                branch: "اسم الفرع",
                location: "العنوان التفصيلي",
                rating: 4,
                features: [
                    "كمال أجسام",
                    "كارديو",
                    "سباحة"
                ],
                price: 800,
                image: "path_to_image.jpg",
                phone: "02XXXXXXXX"
            }
        ]
    },

    // إضافة محافظة جديدة
    alexandria: {
        smouha: [
            {
                name: "اسم الصالة",
                branch: "اسم الفرع",
                location: "العنوان التفصيلي",
                rating: 5,
                features: [
                    "كمال أجسام",
                    "كارديو",
                    "سباحة"
                ],
                price: 900,
                image: "path_to_image.jpg",
                phone: "03XXXXXXXX"
            }
        ]
    },

    // المحافظة الجديدة (مثلاً أسيوط)
    asyut: {
        city_center: [
            {
                name: "جيم المنشاوي",
                branch: "وسط البلد",
                location: "شارع المحطة، المعلمين، أسيوط",
                rating: 5,
                features: ["كمال أجسام", "كارديو", "جيم سيدات", ],
                price: 1000,
                image: "manshawy_gym.jpg",
                phone: "0882222222"
            }
        ],
        west_asyut: [
            {
                name: "Power Gym",
                branch: "غرب أسيوط",
                location: "شارع الجمهورية، غرب أسيوط",
                rating: 4,
                features: ["كمال أجسام", "كارديو", "كيك بوكسينج"],
                price: 800,
                image: "power_gym.jpg",
                phone: "0882222223"
            }
        ]
    }
}; 