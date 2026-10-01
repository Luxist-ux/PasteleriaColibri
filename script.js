        // ========== ESTRUCTURA DE DATOS DEL CATÁLOGO CON IMÁGENES ==========
        // INSTRUCCIONES:
        // 1. Para CATEGORÍAS: Reemplaza el valor de 'emoji' con 'imagenCategoria' y proporciona la ruta de la imagen
        // 2. Para PRODUCTOS: Reemplaza cada string simple con un objeto { nombre: '...', imagen: '...' }
        // 3. Las rutas de imagen deben ser relativas a la carpeta del HTML o URLs absolutas
        // 4. Si una imagen no se carga, se mostrará el emoji de fallback
        // =====================================================================

        const catalogData = {
            pasteleria: {
                // ==================== CATEGORÍA: TORTAS ====================
                tortas: {
                    nombre: 'Tortas',
                    emoji: '🎂', // Fallback si no carga la imagen
                    // IMAGEN DE CATEGORÍA TORTAS: Reemplaza 'torta-categoria.jpg' con tu imagen
                    // Ejemplo: imagenCategoria: 'imagenes/categoria_tortas.jpg'
                    imagenCategoria: 'tortas.png',
                    descripcion: 'Nuestras tortas son creaciones especiales con las mejores recetas y sabores únicos para tus celebraciones.',
                    subcategorias: {
                        // ========== SUBCATEGORÍA: BIZCOCHO ==========
                        bizcocho: {
                            nombre: 'Bizcocho',
                            // IMAGEN DE SUBCATEGORÍA: Descomenta y reemplaza con la ruta a tu imagen
                            // imagenSubcategoria: 'imagenes/torta-bizcocho.jpg',
                            productos: [
                                // INSTRUCCIONES: Reemplaza cada línea con este formato:
                                // { nombre: 'Torta Tres Leches', imagen: 'Images/b_tres_Leches.jpg' }
                                { nombre: 'Torta Tres Leches', imagen: 'Images/b_tres_Leches.jpg' },
                                { nombre: 'Torta Selva Negra', imagen: 'Images/b_selva_negra.jpg' },
                                { nombre: 'Torta Lúcuma Manjar', imagen: 'Images/b_Lucuma_Manjar.jpg' },
                                { nombre: 'Torta Valdiviana', imagen: 'Images/b_Valdiviana.jpeg' },
                                { nombre: 'Torta Tiramisú', imagen: 'Images/b_Tiramisu.jpeg' },
                                { nombre: 'Torta Nuez', imagen: 'Images/b_Nuez.jpeg' },
                                { nombre: 'Torta Chocolate', imagen: 'Images/b_chocolate.jpg' },
                                { nombre: 'Torta de Almendra', imagen: 'Images/b_Nuez.jpeg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: HOJARASCA ==========
                        hojarasca: {
                            nombre: 'Hojarasca',
                            // imagenSubcategoria: 'imagenes/torta-hojarasca.jpg',
                            productos: [
                                { nombre: 'Torta Trasnochada', imagen: 'Images/h_Trasnochada.jpg' },
                                { nombre: 'Torta Hoja Manjar', imagen: 'Images/h_hoja_manjar.jpg' },
                                { nombre: 'Torta Hoja Manjar Maracuyá', imagen: 'Images/h_Hoja_manjar_Maracuya.jpg' },
                                { nombre: 'Torta Hoja Lúcuma Manjar', imagen: 'Images/h_hoja_lucuma_manjar.jpg' },
                                { nombre: 'Torta Hoja Manjar Nuez', imagen: 'Images/h_manjar_nuez.png' },
                                { nombre: 'Torta Amor', imagen: 'Images/h_amor.jpg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: PANQUEQUE ==========
                        panqueque: {
                            nombre: 'Panqueque',
                            // imagenSubcategoria: 'imagenes/torta-panqueque.jpg',
                            productos: [
                                { nombre: 'Torta Panqueque Chocolate Blanco', imagen: 'Images/p_chocolate_blanco.jpeg' },
                                { nombre: 'Torta Panqueque Naranja', imagen: 'Images/p_naranja.jpg' },
                                { nombre: 'Torta Panqueque Chocolate', imagen: 'Images/p_chocolate.jpg' },
                                { nombre: 'Torta Panqueque Trufa', imagen: 'Images/p_trufa.jpeg' },
                                { nombre: 'Torta Panqueque Trufa Naranja', imagen: 'Images/p_trufa_naranja.jpeg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: SIN AZÚCAR ==========
                        sinazucar: {
                            nombre: 'Sin Azúcar',
                            // imagenSubcategoria: 'imagenes/torta-sinazucar.jpg',
                            productos: [
                                { nombre: 'Torta Chocolate Sin Azúcar', imagen: 'Images/S_chocolate.jpg' },
                                { nombre: 'Torta Berries Sin Azúcar', imagen: 'Images/S_Berries.jpg' },
                                { nombre: 'Torta Amor Sin Azúcar', imagen: 'Images/S_amor.jpg' }
                            ]
                        }
                    }
                },
                
                // ==================== CATEGORÍA: PASTELES ====================
                pasteles: {
                    nombre: 'Pasteles',
                    emoji: '🍰',
                    // IMAGEN DE CATEGORÍA PASTELES: Reemplaza 'categoria_pasteles.jpg' con tu imagen
                    imagenCategoria: 'categoria_pasteles.jpg',
                    descripcion: 'Deliciosos pasteles de tamaño perfecto para compartir. Disponibles en variedad de sabores.',
                    subcategorias: {
                        // ========== SUBCATEGORÍA: BIZCOCHO ==========
                        bizcocho: {
                            nombre: 'Bizcocho',
                            // imagenSubcategoria: 'imagenes/pastel-bizcocho.jpg',
                            productos: [
                                { nombre: 'Pastel Tiramisú', imagen: 'Images/pastel-tiramisu.jpg' },
                                { nombre: 'Pastel Selva Negra', imagen: 'Images/pastel-selva-negra.jpg' },
                                { nombre: 'Pastel Nuez', imagen: 'Images/pastel-nuez.jpg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: SIN AZÚCAR ==========
                        sinazucar: {
                            nombre: 'Sin Azúcar',
                            // imagenSubcategoria: 'imagenes/pastel-sinazucar.jpg',
                            productos: [
                                { nombre: 'Pastel Nuez Sin Azúcar', imagen: 'Images/pastel-nuez-sinazucar.jpg' },
                                { nombre: 'Pastel Lúcuma Manjar Sin Azúcar', imagen: 'Images/pastel-lucuma-sinazucar.jpg' },
                                { nombre: 'Pastel Frutos Rojos Sin Azúcar', imagen: 'Images/pastel-frutos-rojos-sinazucar.jpg' }
                            ]
                        }
                    }
                },

                // ==================== CATEGORÍA: PIE Y KUCHEN ====================
                pieykuchen: {
                    nombre: 'Pie y Kuchen',
                    emoji: '🥧',
                    // IMAGEN DE CATEGORÍA PIE Y KUCHEN: Reemplaza 'categoria_pie_kuchen.jpg' con tu imagen
                    imagenCategoria: 'categoria_pie_kuchen.jpg',
                    descripcion: 'Tradicionales pies y kuchenes con recetas clásicas y sabores irresistibles.',
                    subcategorias: {
                        // ========== SUBCATEGORÍA: PIE ==========
                        pie: {
                            nombre: 'Pie',
                            // imagenSubcategoria: 'imagenes/pie.jpg',
                            productos: [
                                { nombre: 'Pie de Maracuyá', imagen: 'Images/pie-maracuya.jpg' },
                                { nombre: 'Pie de Limón', imagen: 'Images/pie-limon.jpg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: KUCHEN ==========
                        kuchen: {
                            nombre: 'Kuchen',
                            // imagenSubcategoria: 'imagenes/kuchen.jpg',
                            productos: [
                                { nombre: 'Kuchen de Frambuesa', imagen: 'Images/kuchen-frambuesa.jpg' },
                                { nombre: 'Kuchen de Manzana', imagen: 'Images/kuchen-manzana.jpg' },
                                { nombre: 'Kuchen Sureño', imagen: 'Images/kuchen-surenio.jpg' },
                                { nombre: 'Kuchen de Nuez', imagen: 'Images/kuchen-nuez.jpg' },
                                { nombre: 'Kuchen de Cereza', imagen: 'Images/kuchen-cereza.jpg' }
                            ]
                        }
                    }
                },

                // ==================== CATEGORÍA: OTROS DULCES ====================
                otrosdulces: {
                    nombre: 'Otros Dulces',
                    emoji: '🍪',
                    // IMAGEN DE CATEGORÍA OTROS DULCES: Reemplaza 'categoria_otros_dulces.jpg' con tu imagen
                    imagenCategoria: 'categoria_otros_dulces.jpg',
                    descripcion: 'Variedad de queques, galletas y postres especiales para todos los gustos.',
                    subcategorias: {
                        // ========== SUBCATEGORÍA: QUEQUES ==========
                        queque: {
                            nombre: 'Queques',
                            // imagenSubcategoria: 'imagenes/queque.jpg',
                            productos: [
                                { nombre: 'Queque de Zanahoria Nuez', imagen: 'imagenes/queque-zanahoria-nuez.jpg' },
                                { nombre: 'Queque de Vainilla', imagen: 'imagenes/queque-vainilla.jpg' },
                                { nombre: 'Queque Mármol', imagen: 'imagenes/queque-marmol.jpg' },
                                { nombre: 'Queque de Nuez', imagen: 'imagenes/queque-nuez.jpg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: SIN GLUTEN ==========
                        singluten: {
                            nombre: 'Sin Gluten',
                            // imagenSubcategoria: 'imagenes/sin-gluten.jpg',
                            productos: [
                                { nombre: 'Galleta Amareeti', imagen: 'imagenes/galleta-amareeti.jpg' },
                                { nombre: 'Galleta de Nuez Miel', imagen: 'imagenes/galleta-nuez-miel.jpg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: OTROS DULCES ==========
                        otros: {
                            nombre: 'Otros Dulces',
                            // imagenSubcategoria: 'imagenes/otros-dulces.jpg',
                            productos: [
                                { nombre: 'Alfajores de Maicena', imagen: 'imagenes/alfajores-maicena.jpg' },
                                { nombre: 'Nussecken', imagen: 'imagenes/nussecken.jpg' },
                                { nombre: 'Galleta Conchita', imagen: 'imagenes/galleta-conchita.jpg' },
                                { nombre: 'Galleta de Avena', imagen: 'imagenes/galleta-avena.jpg' },
                                { nombre: 'Galleta de Miel', imagen: 'imagenes/galleta-miel.jpg' },
                                { nombre: 'Brownie', imagen: 'imagenes/brownie.jpg' },
                                { nombre: 'Galletón de Chocolate', imagen: 'imagenes/galleton-chocolate.jpg' },
                                { nombre: 'Galletón de Pistacho', imagen: 'imagenes/galleton-pistacho.jpg' },
                                { nombre: 'Miel', imagen: 'imagenes/miel.jpg' }
                            ]
                        }
                    }
                }
            },

            // ===================== SECCIÓN: CAFETERÍA =====================
            cafeteria: {
                // ==================== CATEGORÍA: LACTEADOS ====================
                lacteos: {
                    nombre: 'Lacteados',
                    emoji: '☕',
                    // IMAGEN DE CATEGORÍA LACTEADOS: Reemplaza 'categoria_lacteos.jpg' con tu imagen
                    imagenCategoria: 'categoria_lacteos.jpg',
                    descripcion: 'Deliciosas bebidas con leche, cafés y chocolates para disfrutar.',
                    directa: true, // Esta categoría no tiene subcategorías, va directo a productos
                    productos: [
                        { nombre: 'Cappuccino', imagen: 'imagenes/cappuccino.jpg' },
                        { nombre: 'Cappuccino Vainilla', imagen: 'imagenes/cappuccino-vainilla.jpg' },
                        { nombre: 'Latte Vainilla', imagen: 'imagenes/latte-vainilla.jpg' },
                        { nombre: 'Latte Macchiato', imagen: 'imagenes/latte-macchiato.jpg' },
                        { nombre: 'Mokaccino', imagen: 'imagenes/mokaccino.jpg' },
                        { nombre: 'Mokaccino Espresso', imagen: 'imagenes/mokaccino-espresso.jpg' },
                        { nombre: 'Mokaccino Vainilla', imagen: 'imagenes/mokaccino-vainilla.jpg' },
                        { nombre: 'Chocolate Vainilla', imagen: 'imagenes/chocolate-vainilla.jpg' },
                        { nombre: 'Chocolate', imagen: 'imagenes/chocolate.jpg' }
                    ]
                },

                // ==================== CATEGORÍA: CAFÉ NEGRO ====================
                cafenero: {
                    nombre: 'Café Negro',
                    emoji: '☕',
                    // IMAGEN DE CATEGORÍA CAFÉ NEGRO: Reemplaza 'categoria_cafe_negro.jpg' con tu imagen
                    imagenCategoria: 'categoria_cafe_negro.jpg',
                    descripcion: 'Nuestras selecciones de café puro para los verdaderos amantes del café.',
                    directa: true,
                    productos: [
                        { nombre: 'Espresso', imagen: 'imagenes/espresso.jpg' },
                        { nombre: 'Espresso Doble', imagen: 'imagenes/espresso-doble.jpg' },
                        { nombre: 'Lungo', imagen: 'imagenes/lungo.jpg' },
                        { nombre: 'Americano', imagen: 'imagenes/americano.jpg' }
                    ]
                },

                // ==================== CATEGORÍA: TÉ E INFUSIONES ====================
                teinfusiones: {
                    nombre: 'Té e Infusiones',
                    emoji: '🍵',
                    // IMAGEN DE CATEGORÍA TÉ E INFUSIONES: Reemplaza 'categoria_te_infusiones.jpg' con tu imagen
                    imagenCategoria: 'categoria_te_infusiones.jpg',
                    descripcion: 'Selección premium de tés e infusiones de marcas reconocidas.',
                    directa: true,
                    productos: [
                        { nombre: 'Earl Grey (Marley)', imagen: 'imagenes/earl-grey-marley.jpg' },
                        { nombre: 'Spiced Chai Tea (Marley)', imagen: 'imagenes/chai-tea-marley.jpg' },
                        { nombre: 'English Breakfast (Marley)', imagen: 'imagenes/english-breakfast-marley.jpg' },
                        { nombre: 'Earl Grey (Twinings)', imagen: 'imagenes/earl-grey-twinings.jpg' }
                    ]
                }
            },

            // ==================== SECCIÓN: PLANTAS E INSUMOS ====================
            plantas: {
                // ==================== CATEGORÍA: PLANTAS DE INTERIOR ====================
                plantasinterior: {
                    nombre: 'Plantas de Interior',
                    emoji: '🌿',
                    // IMAGEN DE CATEGORÍA PLANTAS DE INTERIOR: Reemplaza 'categoria_plantas_interior.jpg' con tu imagen
                    imagenCategoria: 'categoria_plantas_interior.jpg',
                    descripcion: 'Hermosas plantas verdes para decorar tu hogar.',
                    directa: true,
                    productos: [
                        { nombre: 'Begonias', imagen: 'imagenes/begonias.jpg' },
                        { nombre: 'Sanseviera', imagen: 'imagenes/sanseviera.jpg' },
                        { nombre: 'Filodendros', imagen: 'imagenes/filodendros.jpg' },
                        { nombre: 'Violeta de Persia', imagen: 'imagenes/violeta-persia.jpg' },
                        { nombre: 'Ficus', imagen: 'imagenes/ficus.jpg' },
                        { nombre: 'Peperomia', imagen: 'imagenes/peperomia.jpg' },
                        { nombre: 'Palmeras', imagen: 'imagenes/palmeras.jpg' }
                    ]
                },

                // ==================== CATEGORÍA: INSUMOS ====================
                insumos: {
                    nombre: 'Insumos',
                    emoji: '🌱',
                    // IMAGEN DE CATEGORÍA INSUMOS: Reemplaza 'categoria_insumos.jpg' con tu imagen
                    imagenCategoria: 'categoria_insumos.jpg',
                    descripcion: 'Sustratos y productos esenciales para el cuidado de tus plantas.',
                    directa: true,
                    productos: [
                        { nombre: 'Sustrato Plantas de Interior', imagen: 'imagenes/sustrato-interior.jpg' },
                        { nombre: 'Sustrato Suculenta', imagen: 'imagenes/sustrato-suculenta.jpg' }
                    ]
                },

                // ==================== CATEGORÍA: MACETAS ====================
                macetas: {
                    nombre: 'Macetas',
                    emoji: '🏺',
                    // IMAGEN DE CATEGORÍA MACETAS: Reemplaza 'categoria_macetas.jpg' con tu imagen
                    imagenCategoria: 'categoria_macetas.jpg',
                    descripcion: 'Macetas cerámicas y plásticas para todas tus plantas.',
                    subcategorias: {
                        // ========== SUBCATEGORÍA: CERÁMICOS ==========
                        ceramicos: {
                            nombre: 'Cerámicos',
                            // imagenSubcategoria: 'imagenes/maceta-ceramica.jpg',
                            productos: [
                                { nombre: 'Maceta Cerámica Pequeña', imagen: 'imagenes/maceta-ceramica-pequena.jpg' },
                                { nombre: 'Maceta Cerámica Mediana', imagen: 'imagenes/maceta-ceramica-mediana.jpg' },
                                { nombre: 'Maceta Cerámica Grande', imagen: 'imagenes/maceta-ceramica-grande.jpg' }
                            ]
                        },
                        // ========== SUBCATEGORÍA: PLÁSTICOS ==========
                        plasticos: {
                            nombre: 'Plásticos',
                            // imagenSubcategoria: 'imagenes/maceta-plastica.jpg',
                            productos: [
                                { nombre: 'Maceta Plástica Pequeña', imagen: 'imagenes/maceta-plastica-pequena.jpg' },
                                { nombre: 'Maceta Plástica Mediana', imagen: 'imagenes/maceta-plastica-mediana.jpg' },
                                { nombre: 'Maceta Plástica Grande', imagen: 'imagenes/maceta-plastica-grande.jpg' }
                            ]
                        }
                    }
                }
            }
        };

        let selectedSection = null;
        let selectedCategory = null;
        let selectedSubcategory = null;

        // ==================== FUNCIÓN: Renderizar Categorías ====================
        function renderCategories(section) {
            selectedSection = section;
            const selector = document.getElementById(`categorySelector-${section}`);
            selector.innerHTML = '';
            
            const sectionData = catalogData[section];
            
            for (const [key, category] of Object.entries(sectionData)) {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                
                // Crear el contenido de la imagen de categoría
                let imagenHTML = '';
                if (category.imagenCategoria) {
                    // Si la categoría tiene imagen, mostrarla
                    imagenHTML = `<img src="${category.imagenCategoria}" alt="${category.nombre}">`;
                } else {
                    // Si no, mostrar el emoji como fallback
                    imagenHTML = category.emoji;
                }
                
                btn.innerHTML = `
                    <div class="category-btn-image">${imagenHTML}</div>
                    <div class="category-btn-content">
                        <span class="category-btn-text">${category.nombre}</span>
                        <span class="category-btn-description">${category.descripcion}</span>
                    </div>
                `;
                btn.onclick = () => selectCategory(key, section);
                selector.appendChild(btn);
            }
        }

        // ==================== FUNCIÓN: Seleccionar Categoría ====================
        function selectCategory(categoryKey, section) {
            selectedCategory = categoryKey;
            selectedSubcategory = null;
            selectedSection = section;
            
            const category = catalogData[section][categoryKey];
            
            // Si la categoría es directa, ir directamente a productos
            if (category.directa) {
                document.getElementById(`categorySelector-${section}`).style.display = 'none';
                document.getElementById(`subcategorySelector-${section}`).style.display = 'none';
                document.getElementById(`productList-${section}`).style.display = 'block';
                document.getElementById(`selectedSubcategoryTitle-${section}`).textContent = category.nombre;
                renderProducts(category.productos, section);
            } else {
                // Si tiene subcategorías, mostrar el selector de subcategorías
                document.getElementById(`categorySelector-${section}`).style.display = 'none';
                document.getElementById(`subcategorySelector-${section}`).style.display = 'block';
                document.getElementById(`productList-${section}`).style.display = 'none';
                document.getElementById(`selectedCategoryTitle-${section}`).textContent = category.nombre;
                renderSubcategories(section);
            }
        }

        // ==================== FUNCIÓN: Renderizar Subcategorías ====================
        function renderSubcategories(section) {
            const category = catalogData[section][selectedCategory];
            const buttonsContainer = document.getElementById(`subcategoryButtons-${section}`);
            buttonsContainer.innerHTML = '';
            
            for (const [key, subcategory] of Object.entries(category.subcategorias)) {
                const btn = document.createElement('button');
                btn.className = 'subcategory-card-btn';
                btn.innerHTML = `
                    <span class="subcategory-card-title">${subcategory.nombre}</span>
                    <span class="subcategory-card-subtitle">Ver opciones disponibles</span>
                `;
                btn.onclick = () => selectSubcategory(key, section);
                buttonsContainer.appendChild(btn);
            }
        }

        // ==================== FUNCIÓN: Seleccionar Subcategoría ====================
        function selectSubcategory(subcategoryKey, section) {
            selectedSubcategory = subcategoryKey;
            selectedSection = section;
            
            const category = catalogData[section][selectedCategory];
            const subcategory = category.subcategorias[subcategoryKey];
            
            document.getElementById(`subcategorySelector-${section}`).style.display = 'none';
            document.getElementById(`productList-${section}`).style.display = 'block';
            document.getElementById(`selectedSubcategoryTitle-${section}`).textContent = `${category.nombre} - ${subcategory.nombre}`;
            
            renderProducts(subcategory.productos, section);
        }

        // ==================== FUNCIÓN: Renderizar Productos CON IMÁGENES ====================
        function renderProducts(productos, section) {
            const container = document.getElementById(`productsContainer-${section}`);
            container.innerHTML = '';
            
            productos.forEach(producto => {
                const item = document.createElement('div');
                item.className = 'product-list-item';
                
                // Obtener nombre e imagen del producto
                let productName = '';
                let productImage = '';
                
                if (typeof producto === 'string') {
                    // Formato antiguo (solo string)
                    productName = producto;
                    productImage = null;
                } else {
                    // Formato nuevo (objeto con nombre e imagen)
                    productName = producto.nombre;
                    productImage = producto.imagen;
                }
                
                // Crear HTML de la imagen
                let imagenProductoHTML = '';
                if (productImage) {
                    imagenProductoHTML = `<img src="${productImage}" alt="${productName}">`;
                } else {
                    imagenProductoHTML = '🖼️'; // Emoji de fallback
                }
                
                let productInfo = '';
                if (section === 'pasteleria' && selectedCategory === 'tortas') {
                    productInfo = '<p>15 porciones (8cm × 22cm)</p>';
                }
                
                item.innerHTML = `
                    <div class="product-image-placeholder${!productImage ? ' no-image' : ''}">
                        ${imagenProductoHTML}
                    </div>
                    <div class="product-content">
                        <h4>${productName}</h4>
                        ${productInfo}
                    </div>
                `;
                container.appendChild(item);
            });
        }

        // ==================== FUNCIÓN: Volver a Categorías ====================
        function goBackToCategories(section) {
            selectedSection = section;
            selectedCategory = null;
            selectedSubcategory = null;
            
            document.getElementById(`categorySelector-${section}`).style.display = 'grid';
            document.getElementById(`subcategorySelector-${section}`).style.display = 'none';
            document.getElementById(`productList-${section}`).style.display = 'none';
        }

        // ==================== FUNCIÓN: Volver a Subcategorías ====================
        function goBackToSubcategories(section) {
            selectedSection = section;
            selectedSubcategory = null;
            
            const category = catalogData[section][selectedCategory];
            
            // Si la categoría es directa, volver a categorías
            if (category.directa) {
                selectedCategory = null;
                document.getElementById(`categorySelector-${section}`).style.display = 'grid';
                document.getElementById(`productList-${section}`).style.display = 'none';
            } else {
                // Si tiene subcategorías, volver a subcategorías
                document.getElementById(`subcategorySelector-${section}`).style.display = 'block';
                document.getElementById(`productList-${section}`).style.display = 'none';
            }
        }

        // ==================== FUNCIÓN: Desplazamiento Suave ====================
        function scrollToSection(sectionId) {
            if (sectionId === 'inicio') {
                selectedSection = null;
                selectedCategory = null;
                selectedSubcategory = null;
                
                document.getElementById('categorySelector-pasteleria').style.display = 'grid';
                document.getElementById('subcategorySelector-pasteleria').style.display = 'none';
                document.getElementById('productList-pasteleria').style.display = 'none';
                
                document.getElementById('categorySelector-cafeteria').style.display = 'grid';
                document.getElementById('subcategorySelector-cafeteria').style.display = 'none';
                document.getElementById('productList-cafeteria').style.display = 'none';
                
                document.getElementById('categorySelector-plantas').style.display = 'grid';
                document.getElementById('subcategorySelector-plantas').style.display = 'none';
                document.getElementById('productList-plantas').style.display = 'none';
            }
            
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // ==================== FUNCIÓN: Cambiar Pestaña de Catálogo ====================
        function switchCatalogTab(section, button) {
            // Ocultar todas las secciones
            document.getElementById('pasteleria-section').classList.remove('active');
            document.getElementById('cafeteria-section').classList.remove('active');
            document.getElementById('plantas-section').classList.remove('active');
            
            // Desactivar todos los botones
            const buttons = document.querySelectorAll('.catalog-tab-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Mostrar la sección seleccionada
            document.getElementById(`${section}-section`).classList.add('active');
            
            // Activar el botón correspondiente
            button.classList.add('active');
            
            // Resetear la navegación interna de esa sección
            selectedSection = section;
            selectedCategory = null;
            selectedSubcategory = null;
            
            document.getElementById(`categorySelector-${section}`).style.display = 'grid';
            document.getElementById(`subcategorySelector-${section}`).style.display = 'none';
            document.getElementById(`productList-${section}`).style.display = 'none';
        }

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('[data-scroll-target]').forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    scrollToSection(link.dataset.scrollTarget);
                });
            });

            document.querySelectorAll('[data-catalog-tab]').forEach(button => {
                button.addEventListener('click', () => {
                    switchCatalogTab(button.dataset.catalogTab, button);
                });
            });

            document.querySelectorAll('[data-back-category]').forEach(button => {
                button.addEventListener('click', () => {
                    goBackToCategories(button.dataset.backCategory);
                });
            });

            document.querySelectorAll('[data-back-subcategory]').forEach(button => {
                button.addEventListener('click', () => {
                    goBackToSubcategories(button.dataset.backSubcategory);
                });
            });

            renderCategories('pasteleria');
            renderCategories('cafeteria');
            renderCategories('plantas');
            
            const aboutImage = document.getElementById('about-image-container');
            const aboutFallback = document.getElementById('about-fallback');
            if (aboutImage && aboutImage.querySelector('img')) {
                aboutImage.querySelector('img').onerror = function() {
                    this.hidden = true;
                    if (aboutFallback) aboutFallback.hidden = false;
                };
            }
        });
