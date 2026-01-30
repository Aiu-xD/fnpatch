class O {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this.y = 0;
    if (typeof performance !== "undefined") {
      this.A = () => performance.now();
    } else {
      this.A = Date.now;
    }
  }
  start() {
    this.startTime = this.A();
  }
  K() {
    this.endTime = this.A();
    this.y = this.endTime - this.startTime;
    return this.y;
  }
};

onmessage = async (B) => {
  let C = B.data;
  const seed = C.data;
  const o = await (async function () {
    let d = 0;
    const answer = seed.seed;
    const J = seed.targetHashData;
    const P = seed.startingNonce;
    const timeout = seed.itimeout;
    let Z = await l(answer);
    const Q = await i(
      Z,
      J,
      P,
      timeout
    );
    const f = Object.fromEntries(Q.E.map(function (x, H) {
      return [H, x.R];
    }));
    const D = await l([...Z, f]);
    const e = {
      "hashRate": Q.hashRateInternal,
      "time": Q.k,
      "finalTransform": D,
      "targetHashData": Q.E.map(function (x) {
        return { "iterations": x.R, "targetHash": x.target };
      })
    };
    return e;
    function w(x) {
      const T = new Uint16Array(x.length);
      for (let c = 0; c < T.length; c = c + 1) {
        T[c] = x.charCodeAt(c);
      }
      return btoa(String.fromCharCode(...new Uint8Array(T.buffer)));
    }
    async function i(seed, x, H, timeout) {
      const timer = new O();
      timer.start();
      return new Promise(async (M, b) => {
        try {
          const F = w(JSON.stringify(seed));
          let j = X(F, x.length);
          j = j.map(function (p, r) {
            return { "target": x[r].targetHashData, "seed": p };
          });
          let I = await t(j, H, timeout);
          M(I);
        } catch (p) {
          if (p.message === "POW_TIMEOUT") {
            b({ "message": "POW_TIMEOUT", "hashRate": d / timer.K() });
          } else {
            b(p);
          }
        }
      });
    }
    async function t(x, startingNonce, timeout) {
      let H = startingNonce;
      const T = [];
      const timer = new O();
      timer.start();
      for (let b = 0; b < x.length; b = b + 1) {
        const F = await g(
          H,
          x[b],
          timer,
          timeout
        );
        H = F.R;
        T.push(F);
      }
      const c = timer.K();
      const M = T[T.length - 1].R;
      const hashRateInternal = (M - startingNonce) / c;
      return { "hashRateInternal": hashRateInternal, "E": T, "k": Math.round(c) };
    }
    async function g(startingNonce, x, timer, timeout) {
      let H = startingNonce;
      let T = "";
      while (T !== x.target && timer.K() < timeout) {
        T = await sha512(x.seed + H);
        H = H + 1;
        d = d + 1;
      }
      if (timer.K() >= timeout) {
        throw new Error("POW_TIMEOUT");
      }
      return { "target": x.target, "R": H };
    }
    function X(x, H) {
      let M = Math.ceil(x.length / H);
      x = x.substring(0, M * H);
      let b = [];
      for (let u = 0; u < x.length - 1; u = u + M) {
        if (u === H - 1) {
          b.push(x.substring(u));
        } else {
          b.push(x.substring(u, u + M));
        }
      }
      return b;
    }
    async function Y(answers) {
      let H = answers;
      H = H.map(function (b) {
        const F = b;
        Object.keys(b).forEach(function (j) {
          const I = j[0];
          const p = ["ant", "bear", "cat", "dog", "elephant", "fox", "giraffe", "horse", "iguana", "jaguar", "kangaroo", "lion", "monkey", "newt", "octopus", "penguin", "quokka", "rabbit", "sheep", "tiger", "unicorn", "vulture", "whale", "xenopus", "yak", "zebra", "Ant", "Bear", "Cat", "Dog", "Elephant", "Fox", "Giraffe", "Horse", "Iguana", "Jaguar", "Kangaroo", "Lion", "Monkey", "Newt", "Octopus", "Penguin", "Quokka", "Rabbit", "Sheep", "Tiger", "Unicorn", "Vulture", "Whale", "Xenopus", "Yak", "Zebra"].find(function (r) {
            return r[0].toLowerCase() === I.toLowerCase();
          });
          if (p) {
            F[j + (p.length * p.length).toString()] = p;
            return;
          }
        });
        return F;
      });
      H = H.map(function (b) {
        const F = b;
        Object.keys(b).forEach(function (j) {
          const I = b[j];
          const p = Math.floor(I.length / 2);
          const r = I.slice(0, p);
          const U = I.slice(p, I.length);
          F[j] = U + r;
        });
        return F;
      });
      H = H.map(function (answer) {
        const b = answer;
        Object.keys(answer).forEach(function (u) {
          const F = answer[u];
          const j = F.split("").map(function (I) {
            const p = I.charCodeAt(0) + 4;
            if (p > 126) {
              return p - 65;
            }
            return p;
          });
          b[u] = j.map(function (I) {
            return String.fromCharCode(I);
          }).join("");
        });
        return b;
      });
      var c = [78, 42, 17, 91, 3, 69, 58, 72, 29, 55, 98, 84, 38, 87, 10, 51, 63, 6, 33, 12, 40, 2, 75, 25, 95, 50, 61, 68, 37, 15, 14, 99, 44, 53, 13, 93, 92, 36, 59, 9, 19, 8, 35, 28, 54, 56, 43, 22, 66, 97, 41, 39];
      H = H.map(function (b) {
        const F = b;
        Object.keys(b).forEach(function (j) {
          const I = b[j];
          const p = I.split("");
          const r = p.map(M).map(M).map(M);
          F[j] = r.join("");
        });
        return F;
      });
      return H;
      function M(b) {
        const u = b.charCodeAt(0);
        if (u >= 97) {
          if (u <= 122) {
            return String.fromCharCode(c[u - 97]);
          }
        }
        if (u >= 65) {
          if (u <= 90) {
            return String.fromCharCode(c[u - 39]);
          }
        }
        return b;
      }
    }
    async function l(x) {
      const H = x.map(function (c) {
        const b = c;
        Object.keys(c).forEach(function (u) {
          b[u] = c[u].toString();
        });
        return b;
      });
      let T = await Y(H);
      T = T.map(function (answer) {
        const ianswer = answer;
        Object.keys(answer).forEach(function (c) {
          let M = ianswer[c];
          M = M;
          ianswer[c] = M;
        });
        return ianswer;
      });
      return T;
    }
  })();
  let h = { type: "done", data: {}, data: o };
  postMessage(h);
};
const sha512 = (function () {
  return async function hashStandard(data) {
    const msgBuffer = new TextEncoder().encode(data);
    const subtle = getSubtle();
    const hashBuffer = await subtle.digest("SHA-512", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(function (b) {
      return b.toString(16).padStart(2, "0");
    }).join("");
    return hashHex;
  };
  function getWebkitSubtle() {
    if (!!crypto) {
      if ("webkitSubtle" in crypto) {
        return crypto.webkitSubtle;
      }
    } else {
      return null;
    }
  }
  function getSubtle() {
    return !!crypto && crypto.subtle || getWebkitSubtle();
  }
})();
