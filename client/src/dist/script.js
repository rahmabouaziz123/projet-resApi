// !function() {
//     "use strict";
//     let e, t, n, o, i, a, r, d, s, E = 5, w = .05, l = 1, c = .92, u = "";
//     function h(e, t, n, o, a, d = "") {
//         i = new THREE.IcosahedronGeometry(t, o);
//         let s = new THREE.Vector3(), E = s.clone();
//         s.fromBufferAttribute(i.getAttribute("position"), 0), E.fromBufferAttribute(i.getAttribute("position"), 1);
//         var w = s.distanceTo(E);
//         d = "random" == d ? new THREE.Color(16777215 * Math.random()) : d ? new THREE.Color(d) : 16777215;
//         let l = new THREE.Mesh(new THREE.TorusGeometry(w, n, 50, 50), new THREE.MeshStandardMaterial({
//             color: d,
//             metalness: .5,
//             roughness: .3
//         }));
//         l.castShadow = !0, l.receiveShadow = !0;
//         let c = [];
//         for (let e = 0; e < i.attributes.position.count; e++) {
//             let t = new THREE.Vector3();
//             t.fromBufferAttribute(i.getAttribute("position"), e), c.push([ t.x, t.y, t.z ]);
//         }
//         c = [ ...new Set(c.map(JSON.stringify)) ].map(JSON.parse);
//         for (let t = 0; t < c.length; t++) {
//             let n = new THREE.Vector3(c[t][0], c[t][1], c[t][2]);
//             r = l.clone(), n.multiplyScalar(a), r.position.set(n.x, n.y, n.z), r.lookAt(0, 0, 0), 
//             e.add(r);
//         }
//     }
//     function R() {
//         e.aspect = window.innerWidth / window.innerHeight, e.updateProjectionMatrix(), n.setSize(window.innerWidth, window.innerHeight);
//     }
//     !function() {
//         const m = document.createElement("div");
//         document.body.appendChild(m), (t = new THREE.Scene()).background = 0, (n = new THREE.WebGLRenderer({
//             antialias: !0
//         })).setPixelRatio(window.devicePixelRatio), n.setSize(window.innerWidth, window.innerHeight), 
//         n.outputEncoding = THREE.sRGBEncoding, n.shadowMap.enabled = !0, m.appendChild(n.domElement), 
//         (e = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .01, 500)).position.set(0, 5, 18.5), 
//         e.lookAt(0, 0, 0);
//         const p = new THREE.AmbientLight(16777215, 1.2);
//         t.add(p), d = new THREE.Group(), t.add(d), h(d, E = 5, w = .045, l = 1, c = .92, u = "");
//         u = 16768511;
//         const H = new THREE.PointLight(u, 1, 20);
//         H.castShadow = !0, H.shadow.bias = -.005, d.add(H), i = new THREE.SphereGeometry(.78, 20, 20), 
//         (a = new THREE.MeshBasicMaterial({
//             color: u
//         })).color.multiplyScalar(1);
//         let T = new THREE.Mesh(i, a);
//         H.add(T), s = new THREE.Group(), d.add(s), h(s, E = 3.3, w = .085, l = 0, c = .52, u = "#ff88ff"), 
//         i = new THREE.BoxGeometry(50, 50, 50), a = new THREE.MeshPhongMaterial({
//             color: 3355443,
//             shininess: 10,
//             specular: 1118481,
//             side: THREE.BackSide
//         }), (r = new THREE.Mesh(i, a)).position.y = 19.2, r.receiveShadow = !0, t.add(r), 
//         (o = new THREE.OrbitControls(e, n.domElement)).autoRotate = !0, o.autoRotateSpeed = 2, 
//         o.enableDamping = !0, o.enablePan = !1, o.minDistance = 2, o.maxDistance = 30, o.minPolarAngle = 0, 
//         o.maxPolarAngle = Math.PI / 2, o.target.set(0, 0, 0), o.update(), window.addEventListener("resize", R);
//     }(), function i() {
//         requestAnimationFrame(i);
//         o.update();
//         s.rotation.x += .003, s.rotation.y -= .005, s.rotation.z -= .002, n.render(t, e);
//     }();
// }();