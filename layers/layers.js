var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_india_ds_1 = new ol.format.GeoJSON();
var features_india_ds_1 = format_india_ds_1.readFeatures(json_india_ds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_ds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_ds_1.addFeatures(features_india_ds_1);
var lyr_india_ds_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_ds_1, 
                style: style_india_ds_1,
                popuplayertitle: "india_ds",
                interactive: true,
                title: '<img src="styles/legend/india_ds_1.png" /> india_ds'
            });
var format_Layer1_2 = new ol.format.GeoJSON();
var features_Layer1_2 = format_Layer1_2.readFeatures(json_Layer1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer1_2.addFeatures(features_Layer1_2);
var lyr_Layer1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer1_2, 
                style: style_Layer1_2,
                popuplayertitle: "Layer1",
                interactive: true,
                title: '<img src="styles/legend/Layer1_2.png" /> Layer1'
            });
var lyr_P5_PAN_CD_N18_000_E079_000_DEM_30m_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "P5_PAN_CD_N18_000_E079_000_DEM_30m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/P5_PAN_CD_N18_000_E079_000_DEM_30m_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8794239.566305, 2037549.106219, 8905559.146153, 2154936.574030]
                            })
                        });
var format_Layer2_4 = new ol.format.GeoJSON();
var features_Layer2_4 = format_Layer2_4.readFeatures(json_Layer2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer2_4.addFeatures(features_Layer2_4);
var lyr_Layer2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Layer2_4, 
                style: style_Layer2_4,
                popuplayertitle: "Layer2",
                interactive: true,
                title: '<img src="styles/legend/Layer2_4.png" /> Layer2'
            });
var format_India_Poluation_5 = new ol.format.GeoJSON();
var features_India_Poluation_5 = format_India_Poluation_5.readFeatures(json_India_Poluation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_Poluation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_Poluation_5.addFeatures(features_India_Poluation_5);
var lyr_India_Poluation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_Poluation_5, 
                style: style_India_Poluation_5,
                popuplayertitle: "India_Poluation",
                interactive: true,
    title: 'India_Poluation<br />\
    <img src="styles/legend/India_Poluation_5_0.png" /> 100199 - 172920<br />\
    <img src="styles/legend/India_Poluation_5_1.png" /> 172920 - 257028<br />\
    <img src="styles/legend/India_Poluation_5_2.png" /> 257028 - 329714<br />\
    <img src="styles/legend/India_Poluation_5_3.png" /> 329714 - 426583<br />\
    <img src="styles/legend/India_Poluation_5_4.png" /> 426583 - 498719<br />'
        });
var format_ODTR_6 = new ol.format.GeoJSON();
var features_ODTR_6 = format_ODTR_6.readFeatures(json_ODTR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODTR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODTR_6.addFeatures(features_ODTR_6);
var lyr_ODTR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODTR_6, 
                style: style_ODTR_6,
                popuplayertitle: "ODTR",
                interactive: true,
    title: 'ODTR<br />\
    <img src="styles/legend/ODTR_6_0.png" /> 104453 - 206248<br />\
    <img src="styles/legend/ODTR_6_1.png" /> 206248 - 279958<br />\
    <img src="styles/legend/ODTR_6_2.png" /> 279958 - 325547<br />\
    <img src="styles/legend/ODTR_6_3.png" /> 325547 - 378194<br />\
    <img src="styles/legend/ODTR_6_4.png" /> 378194 - 493037<br />'
        });
var format_HP_7 = new ol.format.GeoJSON();
var features_HP_7 = format_HP_7.readFeatures(json_HP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HP_7.addFeatures(features_HP_7);
var lyr_HP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HP_7, 
                style: style_HP_7,
                popuplayertitle: "HP",
                interactive: true,
                title: '<img src="styles/legend/HP_7.png" /> HP'
            });
var format_AP_8 = new ol.format.GeoJSON();
var features_AP_8 = format_AP_8.readFeatures(json_AP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_8.addFeatures(features_AP_8);
var lyr_AP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_8, 
                style: style_AP_8,
                popuplayertitle: "AP",
                interactive: true,
    title: 'AP<br />\
    <img src="styles/legend/AP_8_0.png" /> 377 - 387.2<br />\
    <img src="styles/legend/AP_8_1.png" /> 387.2 - 396.4<br />\
    <img src="styles/legend/AP_8_2.png" /> 396.4 - 404.4<br />\
    <img src="styles/legend/AP_8_3.png" /> 404.4 - 413.6<br />\
    <img src="styles/legend/AP_8_4.png" /> 413.6 - 427<br />'
        });
var format_india_st_9 = new ol.format.GeoJSON();
var features_india_st_9 = format_india_st_9.readFeatures(json_india_st_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_india_st_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_india_st_9.addFeatures(features_india_st_9);
var lyr_india_st_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_india_st_9, 
                style: style_india_st_9,
                popuplayertitle: "india_st",
                interactive: true,
                title: '<img src="styles/legend/india_st_9.png" /> india_st'
            });
var format_WB_10 = new ol.format.GeoJSON();
var features_WB_10 = format_WB_10.readFeatures(json_WB_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WB_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WB_10.addFeatures(features_WB_10);
var lyr_WB_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WB_10, 
                style: style_WB_10,
                popuplayertitle: "WB",
                interactive: true,
                title: '<img src="styles/legend/WB_10.png" /> WB'
            });
var format_AP_11 = new ol.format.GeoJSON();
var features_AP_11 = format_AP_11.readFeatures(json_AP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_11.addFeatures(features_AP_11);
var lyr_AP_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_11, 
                style: style_AP_11,
                popuplayertitle: "AP",
                interactive: true,
                title: '<img src="styles/legend/AP_11.png" /> AP'
            });
var format_Union_12 = new ol.format.GeoJSON();
var features_Union_12 = format_Union_12.readFeatures(json_Union_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Union_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Union_12.addFeatures(features_Union_12);
var lyr_Union_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Union_12, 
                style: style_Union_12,
                popuplayertitle: "Union",
                interactive: true,
                title: '<img src="styles/legend/Union_12.png" /> Union'
            });
var format_Reprojected_13 = new ol.format.GeoJSON();
var features_Reprojected_13 = format_Reprojected_13.readFeatures(json_Reprojected_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_13.addFeatures(features_Reprojected_13);
var lyr_Reprojected_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_13, 
                style: style_Reprojected_13,
                popuplayertitle: "Reprojected",
                interactive: true,
                title: '<img src="styles/legend/Reprojected_13.png" /> Reprojected'
            });
var format_32456_14 = new ol.format.GeoJSON();
var features_32456_14 = format_32456_14.readFeatures(json_32456_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_32456_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_32456_14.addFeatures(features_32456_14);
var lyr_32456_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_32456_14, 
                style: style_32456_14,
                popuplayertitle: "32456",
                interactive: true,
                title: '<img src="styles/legend/32456_14.png" /> 32456'
            });
var format_Reprojected_15 = new ol.format.GeoJSON();
var features_Reprojected_15 = format_Reprojected_15.readFeatures(json_Reprojected_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_15.addFeatures(features_Reprojected_15);
var lyr_Reprojected_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_15, 
                style: style_Reprojected_15,
                popuplayertitle: "Reprojected",
                interactive: true,
                title: '<img src="styles/legend/Reprojected_15.png" /> Reprojected'
            });
var format_Reprojected_16 = new ol.format.GeoJSON();
var features_Reprojected_16 = format_Reprojected_16.readFeatures(json_Reprojected_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_16.addFeatures(features_Reprojected_16);
var lyr_Reprojected_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_16, 
                style: style_Reprojected_16,
                popuplayertitle: "Reprojected",
                interactive: true,
                title: '<img src="styles/legend/Reprojected_16.png" /> Reprojected'
            });
var format_India_st_17 = new ol.format.GeoJSON();
var features_India_st_17 = format_India_st_17.readFeatures(json_India_st_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_st_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_st_17.addFeatures(features_India_st_17);
var lyr_India_st_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_India_st_17, 
                style: style_India_st_17,
                popuplayertitle: "India_st",
                interactive: true,
                title: '<img src="styles/legend/India_st_17.png" /> India_st'
            });
var format_PointShapefile_18 = new ol.format.GeoJSON();
var features_PointShapefile_18 = format_PointShapefile_18.readFeatures(json_PointShapefile_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointShapefile_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointShapefile_18.addFeatures(features_PointShapefile_18);
var lyr_PointShapefile_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointShapefile_18, 
                style: style_PointShapefile_18,
                popuplayertitle: "Point Shape file",
                interactive: true,
                title: '<img src="styles/legend/PointShapefile_18.png" /> Point Shape file'
            });
var format_Point_19 = new ol.format.GeoJSON();
var features_Point_19 = format_Point_19.readFeatures(json_Point_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_19.addFeatures(features_Point_19);
var lyr_Point_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_19, 
                style: style_Point_19,
                popuplayertitle: "Point",
                interactive: true,
                title: '<img src="styles/legend/Point_19.png" /> Point'
            });
var format_Reprojected_20 = new ol.format.GeoJSON();
var features_Reprojected_20 = format_Reprojected_20.readFeatures(json_Reprojected_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_20.addFeatures(features_Reprojected_20);
var lyr_Reprojected_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_20, 
                style: style_Reprojected_20,
                popuplayertitle: "Reprojected",
                interactive: true,
                title: '<img src="styles/legend/Reprojected_20.png" /> Reprojected'
            });
var format_Buffered_21 = new ol.format.GeoJSON();
var features_Buffered_21 = format_Buffered_21.readFeatures(json_Buffered_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_21.addFeatures(features_Buffered_21);
var lyr_Buffered_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_21, 
                style: style_Buffered_21,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_21.png" /> Buffered'
            });
var format_Buffered_22 = new ol.format.GeoJSON();
var features_Buffered_22 = format_Buffered_22.readFeatures(json_Buffered_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_22.addFeatures(features_Buffered_22);
var lyr_Buffered_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_22, 
                style: style_Buffered_22,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_22.png" /> Buffered'
            });
var format_Clipped_23 = new ol.format.GeoJSON();
var features_Clipped_23 = format_Clipped_23.readFeatures(json_Clipped_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_23.addFeatures(features_Clipped_23);
var lyr_Clipped_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_23, 
                style: style_Clipped_23,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_23.png" /> Clipped'
            });
var format_Intersection_24 = new ol.format.GeoJSON();
var features_Intersection_24 = format_Intersection_24.readFeatures(json_Intersection_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_24.addFeatures(features_Intersection_24);
var lyr_Intersection_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_24, 
                style: style_Intersection_24,
                popuplayertitle: "Intersection",
                interactive: true,
                title: '<img src="styles/legend/Intersection_24.png" /> Intersection'
            });
var format_Intersection_25 = new ol.format.GeoJSON();
var features_Intersection_25 = format_Intersection_25.readFeatures(json_Intersection_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_25.addFeatures(features_Intersection_25);
var lyr_Intersection_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_25, 
                style: style_Intersection_25,
                popuplayertitle: "Intersection",
                interactive: true,
                title: '<img src="styles/legend/Intersection_25.png" /> Intersection'
            });
var format_Symmetricaldifference_26 = new ol.format.GeoJSON();
var features_Symmetricaldifference_26 = format_Symmetricaldifference_26.readFeatures(json_Symmetricaldifference_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Symmetricaldifference_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Symmetricaldifference_26.addFeatures(features_Symmetricaldifference_26);
var lyr_Symmetricaldifference_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Symmetricaldifference_26, 
                style: style_Symmetricaldifference_26,
                popuplayertitle: "Symmetrical difference",
                interactive: true,
                title: '<img src="styles/legend/Symmetricaldifference_26.png" /> Symmetrical difference'
            });
var format_Ponisamplinggpkg_27 = new ol.format.GeoJSON();
var features_Ponisamplinggpkg_27 = format_Ponisamplinggpkg_27.readFeatures(json_Ponisamplinggpkg_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ponisamplinggpkg_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponisamplinggpkg_27.addFeatures(features_Ponisamplinggpkg_27);
var lyr_Ponisamplinggpkg_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ponisamplinggpkg_27, 
                style: style_Ponisamplinggpkg_27,
                popuplayertitle: "Poni sampling.gpkg",
                interactive: true,
                title: '<img src="styles/legend/Ponisamplinggpkg_27.png" /> Poni sampling.gpkg'
            });
var format_PointSampling_28 = new ol.format.GeoJSON();
var features_PointSampling_28 = format_PointSampling_28.readFeatures(json_PointSampling_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointSampling_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointSampling_28.addFeatures(features_PointSampling_28);
var lyr_PointSampling_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointSampling_28, 
                style: style_PointSampling_28,
                popuplayertitle: "Point Sampling",
                interactive: true,
                title: '<img src="styles/legend/PointSampling_28.png" /> Point Sampling'
            });
var format_Region_29 = new ol.format.GeoJSON();
var features_Region_29 = format_Region_29.readFeatures(json_Region_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_29.addFeatures(features_Region_29);
var lyr_Region_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region_29, 
                style: style_Region_29,
                popuplayertitle: "Region ",
                interactive: true,
                title: '<img src="styles/legend/Region_29.png" /> Region '
            });
var format_Randompoints_30 = new ol.format.GeoJSON();
var features_Randompoints_30 = format_Randompoints_30.readFeatures(json_Randompoints_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Randompoints_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Randompoints_30.addFeatures(features_Randompoints_30);
var lyr_Randompoints_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Randompoints_30, 
                style: style_Randompoints_30,
                popuplayertitle: "Random points",
                interactive: true,
                title: '<img src="styles/legend/Randompoints_30.png" /> Random points'
            });
var lyr_Clippedmask_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (mask)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedmask_31.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8820399.667569, 2075787.989146, 8883202.463867, 2125198.547465]
                            })
                        });
var lyr_Interpolated_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "Interpolated",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Interpolated_32.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8826711.779453, 2080202.647880, 8885968.175888, 2131351.714276]
                            })
                        });
var lyr_IDWInterpolation_33 = new ol.layer.Image({
                            opacity: 1,
                            title: "IDW Interpolation",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IDWInterpolation_33.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8826711.779453, 2080202.647880, 8885968.175888, 2131351.714276]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_india_ds_1.setVisible(true);lyr_Layer1_2.setVisible(true);lyr_P5_PAN_CD_N18_000_E079_000_DEM_30m_3.setVisible(true);lyr_Layer2_4.setVisible(true);lyr_India_Poluation_5.setVisible(true);lyr_ODTR_6.setVisible(true);lyr_HP_7.setVisible(true);lyr_AP_8.setVisible(true);lyr_india_st_9.setVisible(true);lyr_WB_10.setVisible(true);lyr_AP_11.setVisible(true);lyr_Union_12.setVisible(true);lyr_Reprojected_13.setVisible(true);lyr_32456_14.setVisible(true);lyr_Reprojected_15.setVisible(true);lyr_Reprojected_16.setVisible(true);lyr_India_st_17.setVisible(true);lyr_PointShapefile_18.setVisible(true);lyr_Point_19.setVisible(true);lyr_Reprojected_20.setVisible(true);lyr_Buffered_21.setVisible(true);lyr_Buffered_22.setVisible(true);lyr_Clipped_23.setVisible(true);lyr_Intersection_24.setVisible(true);lyr_Intersection_25.setVisible(true);lyr_Symmetricaldifference_26.setVisible(true);lyr_Ponisamplinggpkg_27.setVisible(true);lyr_PointSampling_28.setVisible(true);lyr_Region_29.setVisible(true);lyr_Randompoints_30.setVisible(true);lyr_Clippedmask_31.setVisible(true);lyr_Interpolated_32.setVisible(true);lyr_IDWInterpolation_33.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_india_ds_1,lyr_Layer1_2,lyr_P5_PAN_CD_N18_000_E079_000_DEM_30m_3,lyr_Layer2_4,lyr_India_Poluation_5,lyr_ODTR_6,lyr_HP_7,lyr_AP_8,lyr_india_st_9,lyr_WB_10,lyr_AP_11,lyr_Union_12,lyr_Reprojected_13,lyr_32456_14,lyr_Reprojected_15,lyr_Reprojected_16,lyr_India_st_17,lyr_PointShapefile_18,lyr_Point_19,lyr_Reprojected_20,lyr_Buffered_21,lyr_Buffered_22,lyr_Clipped_23,lyr_Intersection_24,lyr_Intersection_25,lyr_Symmetricaldifference_26,lyr_Ponisamplinggpkg_27,lyr_PointSampling_28,lyr_Region_29,lyr_Randompoints_30,lyr_Clippedmask_31,lyr_Interpolated_32,lyr_IDWInterpolation_33];
lyr_india_ds_1.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'India_Population_DST_ID': 'India_Population_DST_ID', 'India_Population_STATE': 'India_Population_STATE', 'India_Population_Population': 'India_Population_Population', });
lyr_Layer1_2.set('fieldAliases', {'id': 'id', });
lyr_Layer2_4.set('fieldAliases', {'id': 'id', });
lyr_India_Poluation_5.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'India_Popu': 'India_Popu', 'India_Po_1': 'India_Po_1', 'India_Po_2': 'India_Po_2', });
lyr_ODTR_6.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'India_Popu': 'India_Popu', 'India_Po_1': 'India_Po_1', 'India_Po_2': 'India_Po_2', });
lyr_HP_7.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'India_Popu': 'India_Popu', 'India_Po_1': 'India_Po_1', 'India_Po_2': 'India_Po_2', });
lyr_AP_8.set('fieldAliases', {'STATE': 'STATE', });
lyr_india_st_9.set('fieldAliases', {'STATE': 'STATE', });
lyr_WB_10.set('fieldAliases', {'STATE': 'STATE', });
lyr_AP_11.set('fieldAliases', {'STATE': 'STATE', });
lyr_Union_12.set('fieldAliases', {'STATE': 'STATE', 'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE_2': 'STATE_2', 'India_Popu': 'India_Popu', 'India_Po_1': 'India_Po_1', 'India_Po_2': 'India_Po_2', });
lyr_Reprojected_13.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'India_Population_DST_ID': 'India_Population_DST_ID', 'India_Population_STATE': 'India_Population_STATE', 'India_Population_Population': 'India_Population_Population', });
lyr_32456_14.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', 'India_Popu': 'India_Popu', 'India_Po_1': 'India_Po_1', 'India_Po_2': 'India_Po_2', });
lyr_Reprojected_15.set('fieldAliases', {'STATE': 'STATE', });
lyr_Reprojected_16.set('fieldAliases', {'STATE': 'STATE', });
lyr_India_st_17.set('fieldAliases', {'STATE': 'STATE', });
lyr_PointShapefile_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Point_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Reprojected_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Buffered_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Buffered_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Clipped_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Intersection_24.set('fieldAliases', {'id': 'id', 'id_2': 'id_2', });
lyr_Intersection_25.set('fieldAliases', {'id': 'id', 'id_2': 'id_2', });
lyr_Symmetricaldifference_26.set('fieldAliases', {'id': 'id', 'id_2': 'id_2', });
lyr_Ponisamplinggpkg_27.set('fieldAliases', {'fid': 'fid', 'P5_PAN_CD_N18_000_E079_000_DEM_30m': 'P5_PAN_CD_N18_000_E079_000_DEM_30m', });
lyr_PointSampling_28.set('fieldAliases', {'fid': 'fid', 'P5_PAN_CD_': 'P5_PAN_CD_', });
lyr_Region_29.set('fieldAliases', {'id': 'id', });
lyr_Randompoints_30.set('fieldAliases', {'id': 'id', });
lyr_india_ds_1.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'India_Population_DST_ID': 'Range', 'India_Population_STATE': 'DateTime', 'India_Population_Population': 'Range', });
lyr_Layer1_2.set('fieldImages', {'id': '', });
lyr_Layer2_4.set('fieldImages', {'id': '', });
lyr_India_Poluation_5.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'India_Popu': 'TextEdit', 'India_Po_1': 'TextEdit', 'India_Po_2': 'TextEdit', });
lyr_ODTR_6.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', 'India_Popu': 'TextEdit', 'India_Po_1': 'TextEdit', 'India_Po_2': 'TextEdit', });
lyr_HP_7.set('fieldImages', {'DST_ID': '', 'DISTRICT': '', 'STATE': '', 'India_Popu': '', 'India_Po_1': '', 'India_Po_2': '', });
lyr_AP_8.set('fieldImages', {'STATE': 'TextEdit', });
lyr_india_st_9.set('fieldImages', {'STATE': 'TextEdit', });
lyr_WB_10.set('fieldImages', {'STATE': '', });
lyr_AP_11.set('fieldImages', {'STATE': '', });
lyr_Union_12.set('fieldImages', {'STATE': '', 'DST_ID': '', 'DISTRICT': '', 'STATE_2': '', 'India_Popu': '', 'India_Po_1': '', 'India_Po_2': '', });
lyr_Reprojected_13.set('fieldImages', {'DST_ID': '', 'DISTRICT': '', 'STATE': '', 'India_Population_DST_ID': '', 'India_Population_STATE': '', 'India_Population_Population': '', });
lyr_32456_14.set('fieldImages', {'DST_ID': '', 'DISTRICT': '', 'STATE': '', 'India_Popu': '', 'India_Po_1': '', 'India_Po_2': '', });
lyr_Reprojected_15.set('fieldImages', {'STATE': '', });
lyr_Reprojected_16.set('fieldImages', {'STATE': '', });
lyr_India_st_17.set('fieldImages', {'STATE': '', });
lyr_PointShapefile_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Point_19.set('fieldImages', {'id': '', 'Name': '', });
lyr_Reprojected_20.set('fieldImages', {'id': '', 'Name': '', });
lyr_Buffered_21.set('fieldImages', {'id': '', 'Name': '', });
lyr_Buffered_22.set('fieldImages', {'id': '', 'Name': '', });
lyr_Clipped_23.set('fieldImages', {'id': '', 'Name': '', });
lyr_Intersection_24.set('fieldImages', {'id': '', 'id_2': '', });
lyr_Intersection_25.set('fieldImages', {'id': '', 'id_2': '', });
lyr_Symmetricaldifference_26.set('fieldImages', {'id': '', 'id_2': '', });
lyr_Ponisamplinggpkg_27.set('fieldImages', {'fid': '', 'P5_PAN_CD_N18_000_E079_000_DEM_30m': '', });
lyr_PointSampling_28.set('fieldImages', {'fid': '', 'P5_PAN_CD_': '', });
lyr_Region_29.set('fieldImages', {'id': '', });
lyr_Randompoints_30.set('fieldImages', {'id': '', });
lyr_india_ds_1.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'India_Population_DST_ID': 'no label', 'India_Population_STATE': 'no label', 'India_Population_Population': 'no label', });
lyr_Layer1_2.set('fieldLabels', {'id': 'no label', });
lyr_Layer2_4.set('fieldLabels', {'id': 'no label', });
lyr_India_Poluation_5.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'India_Popu': 'no label', 'India_Po_1': 'no label', 'India_Po_2': 'no label', });
lyr_ODTR_6.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'India_Popu': 'no label', 'India_Po_1': 'no label', 'India_Po_2': 'no label', });
lyr_HP_7.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'India_Popu': 'no label', 'India_Po_1': 'no label', 'India_Po_2': 'no label', });
lyr_AP_8.set('fieldLabels', {'STATE': 'no label', });
lyr_india_st_9.set('fieldLabels', {'STATE': 'no label', });
lyr_WB_10.set('fieldLabels', {'STATE': 'no label', });
lyr_AP_11.set('fieldLabels', {'STATE': 'no label', });
lyr_Union_12.set('fieldLabels', {'STATE': 'no label', 'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE_2': 'no label', 'India_Popu': 'no label', 'India_Po_1': 'no label', 'India_Po_2': 'no label', });
lyr_Reprojected_13.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'India_Population_DST_ID': 'no label', 'India_Population_STATE': 'no label', 'India_Population_Population': 'no label', });
lyr_32456_14.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'no label', 'STATE': 'no label', 'India_Popu': 'no label', 'India_Po_1': 'no label', 'India_Po_2': 'no label', });
lyr_Reprojected_15.set('fieldLabels', {'STATE': 'no label', });
lyr_Reprojected_16.set('fieldLabels', {'STATE': 'no label', });
lyr_India_st_17.set('fieldLabels', {'STATE': 'no label', });
lyr_PointShapefile_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Point_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Reprojected_20.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Buffered_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Buffered_22.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Clipped_23.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Intersection_24.set('fieldLabels', {'id': 'no label', 'id_2': 'no label', });
lyr_Intersection_25.set('fieldLabels', {'id': 'no label', 'id_2': 'no label', });
lyr_Symmetricaldifference_26.set('fieldLabels', {'id': 'no label', 'id_2': 'no label', });
lyr_Ponisamplinggpkg_27.set('fieldLabels', {'fid': 'no label', 'P5_PAN_CD_N18_000_E079_000_DEM_30m': 'no label', });
lyr_PointSampling_28.set('fieldLabels', {'fid': 'no label', 'P5_PAN_CD_': 'no label', });
lyr_Region_29.set('fieldLabels', {'id': 'no label', });
lyr_Randompoints_30.set('fieldLabels', {'id': 'no label', });
lyr_Randompoints_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});