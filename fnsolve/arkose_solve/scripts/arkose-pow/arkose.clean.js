const h8 = k;
(function (h, G) {
  const h7 = k,
    r = h();
  while (!![]) {
    try {
      const Z = parseInt(h7(553)) / 1 * (-parseInt(h7(505)) / 2) + -parseInt(h7(575)) / 3 + parseInt(h7(584)) / 4 + parseInt(h7(533)) / 5 * (-parseInt(h7(496)) / 6) + parseInt(h7(574)) / 7 + -parseInt(h7(592)) / 8 + parseInt(h7(552)) / 9;
      if (Z === G) break;else r["push"](r["shift"]());
    } catch (Y) {
      r["push"](r["shift"]());
    }
  }
})(N, 735615);
const j = "POW_TIMEOU" + "T",
  p = h => {
    return {
      "type": h,
      "data": {}
    };
  },
  c = {
    "I": "start",
    "M": "cancel"
  },
  w = {
    "ERROR": "error",
    "DONE": "done",
    "LOADED": "loaded"
  };
function k(h, G) {
  const r = N();
  return k = function (Z, Y) {
    Z = Z - 492;
    let v = r[Z];
    return v;
  }, k(h, G);
}
class f {
  constructor() {
    const h9 = h8,
      h = {
        "zckpb": "undefined"
      };
    this["startTime"] = 0, this["endTime"] = 0, this["m"] = 0, typeof performance !== h["zckpb"] ? this["V"] = () => performance["now"]() : this["V"] = Date["now"];
  }
  ["start"]() {
    const hh = h8;
    this["startTime"] = this["V"]();
  }
  ["e"]() {
    const hG = h8;
    return this["endTime"] = this["V"](), this["m"] = this["endTime"] - this["startTime"], this["m"];
  }
}
try {
  onmessage = async h => {
    const hN = h8,
      G = {
        "zRpLM": function (Z, Y) {
          return Z !== Y;
        },
        "GWWZj": "KhmTL",
        "angGN": "GHbnM",
        "DWydQ": function (Z, Y) {
          return Z - Y;
        },
        "yzbyp": function (Z, Y) {
          return Z !== Y;
        },
        "cwlqO": function (Z, Y) {
          return Z(Y);
        },
        "ONSLb": "pPVey",
        "BLEsc": function (Z, Y) {
          return Z in Y;
        },
        "cjXXM": "Timed out " + "inside wor" + "ker"
      };
    let r = h["data"];
    switch (r["type"]) {
      case c["M"]:
        {
          if ("TfSCP" !== "DSuXg") break;else this["startTime"] = 0, this["endTime"] = 0, this["m"] = 0, G["zRpLM"](typeof Z, "undefined") ? this["V"] = () => l["now"]() : this["V"] = l["now"];
        }
      case c["I"]:
        {
          try {
            const seed = r["data"],
              Y = await async function () {
                const hk = hN,
                  P = {
                    "lPQrt": function (q, o) {
                      return q < o;
                    },
                    "innQk": "KVnEw",
                    "TVBrr": function (q, o) {
                      return q(o);
                    },
                    "ILiPM": function (q, o, O, b, y) {
                      return q(o, O, b, y);
                    },
                    "IVDsY": function (q, o) {
                      return G["DWydQ"](q, o);
                    },
                    "DMYng": function (q, o) {
                      return q - o;
                    },
                    "dcaVN": "NoMuh",
                    "MHwBB": function (q, o) {
                      return q(o);
                    },
                    "WshyN": function (q, o) {
                      return q + o;
                    },
                    "bVaul": function (q, o) {
                      return q - o;
                    },
                    "TrILs": function (q, o) {
                      return q * o;
                    },
                    "YikZx": function (q, o) {
                      return q >= o;
                    },
                    "wHZat": function (q, o) {
                      const hr = hk;
                      return G["yzbyp"](q, o);
                    },
                    "JXESw": "MDLKz",
                    "gWvTD": function (q, o) {
                      return q + o;
                    }
                  };
                let l = 0;
                function A(q) {
                  const hZ = hk,
                    o = {
                      "UwSLw": function (b, d) {
                        return b - d;
                      }
                    },
                    O = new Uint16Array(q["length"]);
                  for (let b = 0; P["lPQrt"](b, O["length"]); b++) {
                    if ("KVnEw" === P["innQk"]) O[b] = q["charCodeAt"](b);else return this["endTime"] = this["V"](), this["m"] = o["UwSLw"](this["endTime"], this["startTime"]), this["m"];
                  }
                  return btoa(String["fromCharCo" + "de"](...new Uint8Array(O["buffer"])));
                }
                async function z(seed, q, o, timeout) {
                  const hY = hk,
                    O = {
                      "crguZ": function (b, d) {
                        return b === d;
                      },
                      "indnV": "EBeYl",
                      "VnwHY": "jJyqo",
                      "nwwFl": function (b, y) {
                        return P["TVBrr"](b, y);
                      },
                      "SvYra": "POW_TIMEOU" + "T",
                      "IlPPQ": function (b, y) {
                        return b(y);
                      }
                    },
                    timer = new f();
                  return timer["start"](), new Promise(async (b, y) => {
                    const hv = hY,
                      d = {
                        "BnPjH": "Error when" + " processin" + "g proof of" + " work"
                      };
                    try {
                      if ("LXXgY" === O["VnwHY"]) Z["data"] = {
                        "error": {
                          "data": Y,
                          "trace": v["stack"],
                          "type": "runtime_er" + "ror",
                          "message": d["BnPjH"]
                        }
                      };else {
                        const U = A(JSON["stringify"](seed));
                        let W = u(U, q["length"]);
                        W = W["map"]((S, i) => {
                          const hP = hv,
                            T = {
                              "KApJp": function (h0, h1) {
                                return h0 / h1;
                              }
                            };
                          if (O["crguZ"]("EBeYl", O["indnV"])) return {
                            "target": q[i]["targetHash" + "Data"],
                            "seed": S
                          };else r({
                            "message": "POW_TIMEOU" + "T",
                            "hashRate": T["KApJp"](Z, timer["e"]())
                          });
                        });
                        let E = await a(W, o, timeout);
                        O["nwwFl"](b, E);
                      }
                    } catch (S) {
                      S["message"] === O["SvYra"] ? y({
                        "message": "POW_TIMEOU" + "T",
                        "hashRate": l / timer["e"]()
                      }) : O["IlPPQ"](y, S);
                    }
                  });
                }
                async function a(q, startingNonce, timeout) {
                  const hl = hk;
                  let o = startingNonce;
                  const O = [],
                    timer = new f();
                  timer["start"]();
                  for (let d = 0; d < q["length"]; d++) {
                    const s = await P["ILiPM"](J, o, q[d], timer, timeout);
                    o = s["t"], O["push"](s);
                  }
                  const b = timer["e"](),
                    y = O[P["IVDsY"](O["length"], 1)]["t"],
                    hashRateInternal = P["DMYng"](y, startingNonce) / b;
                  return {
                    "hashRateInternal": hashRateInternal,
                    "F": O,
                    "K": Math["round"](b)
                  };
                }
                async function J(startingNonce, q, timer, timeout) {
                  const hA = hk,
                    o = {
                      "lETLy": function (d, s) {
                        return d / s;
                      },
                      "wxggY": function (d, s) {
                        return d + s;
                      }
                    };
                  let O = startingNonce,
                    b = "",
                    y = sha512;
                  while (b !== q["target"] && timer["e"]() < timeout) {
                    if ("QoxWv" === P["dcaVN"]) {
                      const s = v[P],
                        U = l["floor"](o["lETLy"](s["length"], 2)),
                        W = s["slice"](0, U),
                        E = s["slice"](U, s["length"]);
                      A[z] = o["wxggY"](E, W);
                    } else b = await P["MHwBB"](y, P["WshyN"](q["seed"], O)), O++, l++;
                  }
                  if (timer["e"]() >= timeout) throw new Error("POW_TIMEOU" + "T");
                  return {
                    "target": q["target"],
                    "t": O
                  };
                }
                function u(q, o) {
                  const hz = hk;
                  if ("pOISE" === "YLJCu") return [r, Z["t"]];else {
                    let b = Math["ceil"](q["length"] / o);
                    q = q["substring"](0, P["TrILs"](b, o));
                    let y = [];
                    for (let d = 0; d < q["length"] - 1; d += b) {
                      if ("Xlliv" !== "tRmLz") {
                        if (d === o - 1) y["push"](q["substring"](d));else {
                          if ("QObHm" === "QObHm") y["push"](q["substring"](d, d + b));else {
                            let S = a["ceil"](J["length"] / u);
                            n = X["substring"](0, S * B);
                            let T = [];
                            for (let x = 0; x < H["length"] - 1; x += S) {
                              x === P["bVaul"](O, 1) ? T["push"](d["substring"](x)) : T["push"](s["substring"](x, x + S));
                            }
                            return T;
                          }
                        }
                      } else {
                        const W = P ? function () {
                          const ha = hz;
                          if (W) {
                            const E = L["apply"](C, arguments);
                            return R = null, E;
                          }
                        } : function () {};
                        return J = ![], W;
                      }
                    }
                    return y;
                  }
                }
                async function n(answers) {
                  const hJ = hk,
                    q = {
                      "nudSB": function (O, b) {
                        return O / b;
                      },
                      "PpkuE": "jkUct",
                      "IuTxZ": G["GWWZj"],
                      "hDEFo": function (O, b) {
                        return O + b;
                      }
                    };
                  if (G["angGN"] !== "GHbnM") {
                    const b = l;
                    return A["keys"](z)["forEach"](y => {
                      const hu = hJ,
                        d = b[y],
                        s = d["split"](""),
                        U = s["map"](B)["map"](L)["map"](C);
                      b[y] = U["join"]("");
                    }), b;
                  } else {
                    let b = answers;
                    b = b["map"](d => {
                      const hn = hJ,
                        s = {
                          "jNWiS": function (U, W) {
                            return U + W;
                          },
                          "vwCFa": function (U, W) {
                            return U + W;
                          },
                          "PAaXS": "ncgDP"
                        };
                      if ("GBRJl" !== "sySeY") {
                        const U = d;
                        return Object["keys"](d)["forEach"](W => {
                          const hX = hn;
                          if (s["PAaXS"] === "ncgDP") {
                            const E = d[W],
                              S = E["split"](""),
                              i = (x, h0) => {
                                const hB = hX;
                                if (h0["match"](/[0-9]/)) return x + String["fromCharCo" + "de"](s["jNWiS"](+h0, 33));
                                if (h0["match"](/[a-zA-Z]/)) {
                                  const h1 = h0["charCodeAt"](0);
                                  return s["vwCFa"](x, h1["toString"]());
                                }
                                return x + h0;
                              },
                              T = S["reduce"](i, "");
                            U[W] = T;
                          } else {
                            const ianswer = answer;
                            return G["keys"](answer)["forEach"](h0 => {
                              let h1 = ianswer[h0];
                              h1 = h1, ianswer[h0] = h1;
                            }), ianswer;
                          }
                        }), U;
                      } else r(Z);
                    }), b = b["map"](d => {
                      const hL = hJ,
                        s = {
                          "QQhem": function (W, E) {
                            return W + E;
                          },
                          "MEEOn": "AaXfX",
                          "MPepL": function (W, E) {
                            return q["nudSB"](W, E);
                          }
                        },
                        U = d;
                      return Object["keys"](d)["forEach"](W => {
                        const hC = hL;
                        if ("AaXfX" === s["MEEOn"]) {
                          const E = d[W],
                            S = Math["floor"](s["MPepL"](E["length"], 2)),
                            i = E["slice"](0, S),
                            T = E["slice"](S, E["length"]);
                          U[W] = T + i;
                        } else {
                          if (z["match"](/[0-9]/)) return R + D["fromCharCo" + "de"](+H + 33);
                          if (n["match"](/[a-zA-Z]/)) {
                            const h0 = g["charCodeAt"](0);
                            return q + h0["toString"]();
                          }
                          return s["QQhem"](L, C);
                        }
                      }), U;
                    }), b = b["map"](d => {
                      const hR = hJ;
                      if (q["PpkuE"] === q["IuTxZ"]) {
                        let U = Z(Y["ERROR"]);
                        U["data"] = {
                          "error": "No Valid M" + "essage typ" + "e"
                        }, v(U);
                      } else {
                        const U = d;
                        return Object["keys"](d)["forEach"](W => {
                          const hD = hR,
                            E = {
                              "wxCml": "ocfFS"
                            },
                            S = d[W],
                            i = S["split"](""),
                            T = (h0, h1) => {
                              const hH = hD;
                              if (E["wxCml"] !== "ocfFS") return Z + Y["fromCharCo" + "de"](+v + 33);else {
                                if (h1["match"](/[0-9]/)) {
                                  if ("MfFyf" !== "MfFyf") r = Z["message"];else return h0 + String["fromCharCo" + "de"](+h1 + 33);
                                }
                                if (h1["match"](/[a-zA-Z]/)) {
                                  const h4 = h1["charCodeAt"](0);
                                  return h0 + h4["toString"]();
                                }
                                return h0 + h1;
                              }
                            },
                            x = i["reduce"](T, "");
                          U[W] = x;
                        }), U;
                      }
                    });
                    var o = [78, 42, 17, 91, 3, 69, 58, 72, 29, 55, 98, 84, 38, 87, 10, 51, 63, 6, 33, 12, 40, 2, 75, 25, 95, 50, 61, 68, 37, 15, 14, 99, 44, 53, 13, 93, 92, 36, 59, 9, 19, 8, 35, 28, 54, 56, 43, 22, 66, 97, 41, 39];
                    function y(d) {
                      const hg = hJ,
                        s = d["charCodeAt"](0);
                      if (P["YikZx"](s, 97) && s <= 122) {
                        if ("SxAFw" === "fJlQp") {
                          const W = r["charCodeAt"](0);
                          return q["hDEFo"](Z, W["toString"]());
                        } else return String["fromCharCo" + "de"](o[P["IVDsY"](s, 97)]);
                      }
                      if (s >= 65 && s <= 90) return P["wHZat"]("jtvct", "PRBLh") ? String["fromCharCo" + "de"](o[s - 39]) : !!Z && "webkitSubtle" in Y ? v.webkitSubtle : null;
                      return d;
                    }
                    return b = b["map"](d => {
                      const hq = hJ,
                        s = d;
                      return Object["keys"](d)["forEach"](U => {
                        const ho = hq,
                          W = d[U],
                          E = W["split"](""),
                          S = E["map"](y)["map"](y)["map"](y);
                        s[U] = S["join"]("");
                      }), s;
                    }), b;
                  }
                }
                async function X(q) {
                  const hO = hk,
                    o = {
                      "TmUdL": P["JXESw"],
                      "JVHEA": function (O, b) {
                        return O in b;
                      },
                      "cFGeK": "message",
                      "NgEBG": "Error when" + " processin" + "g proof of" + " work"
                    };
                  if (P["wHZat"]("fBUna", "UoKzq")) {
                    const O = q["map"](y => {
                      const hb = hO,
                        d = {
                          "QUYBJ": function (U, W) {
                            return U !== W;
                          }
                        },
                        s = y;
                      return Object["keys"](y)["forEach"](U => {
                        const hy = hb;
                        if (d["QUYBJ"]("EKtDb", "kUPBO")) s[U] = y[U]["toString"]();else {
                          const E = {
                              "uItaw": function (h0, h1) {
                                return h0 + h1;
                              }
                            },
                            S = v[P],
                            i = S["split"](""),
                            T = (h0, h1) => {
                              const hd = hy;
                              if (h1["match"](/[0-9]/)) return h0 + i["fromCharCo" + "de"](+h1 + 33);
                              if (h1["match"](/[a-zA-Z]/)) {
                                const h2 = h1["charCodeAt"](0);
                                return h0 + h2["toString"]();
                              }
                              return E["uItaw"](h0, h1);
                            },
                            x = i["reduce"](T, "");
                          A[z] = x;
                        }
                      }), s;
                    });
                    let b = await n(O);
                    return b = b["map"](answer => {
                      const hs = hO,
                        y = {
                          "LaFXF": "NBZtr",
                          "QBuaD": o["TmUdL"]
                        },
                        ianswer = answer;
                      return Object["keys"](answer)["forEach"](d => {
                        const hU = hs;
                        if (y["LaFXF"] === y["QBuaD"]) Y[v] = P["charCodeAt"](l);else {
                          let U = ianswer[d];
                          U = U, ianswer[d] = U;
                        }
                      }), ianswer;
                    }), b;
                  } else {
                    let d = A(z["ERROR"]),
                      s = "";
                    o["JVHEA"](o["cFGeK"], a) && (s = L["message"]), s === u ? d["data"] = {
                      "error": {
                        "data": {
                          "hashRate": C["hashRate"]
                        },
                        "type": "work_timeo" + "ut",
                        "message": "Timed out " + "inside wor" + "ker"
                      }
                    } : d["data"] = {
                      "error": {
                        "data": s,
                        "trace": R["stack"],
                        "type": "runtime_er" + "ror",
                        "message": o["NgEBG"]
                      }
                    }, B(d);
                  }
                }
                const answer = seed["seed"],
                  B = seed["targetHash" + "Data"],
                  L = seed["startingNo" + "nce"],
                  timeout = seed["itimeout"];
                let C = await X(answer);
                const R = await z(C, B, L, timeout),
                  D = Object["fromEntrie" + "s"](R["F"]["map"]((q, o) => {
                    const hW = hk;
                    return "AiyxJ" !== "dTKdT" ? [o, q["t"]] : Z + Y["fromCharCo" + "de"](P["gWvTD"](+v, 33));
                  })),
                  H = await G["cwlqO"](X, [...C, D]),
                  g = {
                    "hashRate": R["hashRateIn" + "ternal"],
                    "time": R["K"],
                    "finalTransform": H,
                    "targetHashData": R["F"]["map"](q => {
                      const hE = hk;
                      return {
                        "iterations": q["t"],
                        "targetHash": q["target"]
                      };
                    })
                  };
                return g;
              }();
            let v = p(w["DONE"]);
            v["data"] = Y, G["cwlqO"](postMessage, v);
          } catch (P) {
            if (G["ONSLb"] !== "QLfXL") {
              let l = p(w["ERROR"]),
                A = "";
              G["BLEsc"]("message", P) && (A = P["message"]);
              if (A === j) {
                if ("qHgZi" !== "LoLmf") l["data"] = {
                  "error": {
                    "data": {
                      "hashRate": P["hashRate"]
                    },
                    "type": "work_timeo" + "ut",
                    "message": G["cjXXM"]
                  }
                };else {
                  let a = ianswer[r];
                  a = a, ianswer[Z] = a;
                }
              } else {
                if ("MUKUE" === "MUKUE") l["data"] = {
                  "error": {
                    "data": A,
                    "trace": P["stack"],
                    "type": "runtime_er" + "ror",
                    "message": "Error when" + " processin" + "g proof of" + " work"
                  }
                };else return {
                  "type": G,
                  "data": {}
                };
              }
              postMessage(l);
            } else {
              const u = new P(l["length"]);
              for (let n = 0; n < u["length"]; n++) {
                u[n] = n["charCodeAt"](n);
              }
              return z(a["fromCharCo" + "de"](...new J(u["buffer"])));
            }
          }
          break;
        }
      default:
        {
          let u = p(w["ERROR"]);
          u["data"] = {
            "error": "No Valid M" + "essage typ" + "e"
          }, postMessage(u);
        }
    }
  };
  const Q = p(w["LOADED"]);
  postMessage(Q);
} catch (h5) {
  let h6 = p(w["ERROR"]);
  h6["data"] = {
    "error": {
      "type": "runtime_er" + "ror",
      "data": h5,
      "message": "Unknown er" + "ror"
    }
  }, postMessage(h6);
}
function N() {
  const hI = ["Data", "round", "indnV", "No Valid M", "wHZat", "EBeYl", "startTime", "1726664DSLeAq", "PpkuE", "LXXgY", "PRBLh", "LaFXF", "QObHm", "SvYra", "KhmTL", "8221560JUiRUt", "fromEntrie", "g proof of", "IuTxZ", "GBRJl", " processin", "slice", "QLfXL", "YLJCu", "undefined", "Error when", "hDEFo", "nce", "endTime", "QQhem", "wxggY", "fBUna", "EKtDb", "Timed out ", "targetHash", "apply", "LoLmf", "essage typ", "innQk", "now", "pOISE", "reduce", "TfSCP", "NoMuh", "pPVey", "buffer", "ternal", "start", "cwlqO", "nwwFl", "tRmLz", "38946rTgvST", "AaXfX", "toString", "TmUdL", "ERROR", "work_timeo", "MDLKz", "stack", "ceil", "214LjNnsm", "forEach", "runtime_er", "NBZtr", "UwSLw", "length", "match", "loaded", "DMYng", "fromCharCo", "YikZx", "data", "fJlQp", "AiyxJ", "cancel", "QUYBJ", "BLEsc", "QoxWv", "ocfFS", "IlPPQ", "jNWiS", "POW_TIMEOU", "ncgDP", "dTKdT", "JVHEA", "yzbyp", "split", "GHbnM", "55JDffea", "MUKUE", "kUPBO", "substring", "MHwBB", "NgEBG", "cFGeK", "ker", "angGN", "hashRate", "jkUct", "ILiPM", "map", "lETLy", "IVDsY", "qHgZi", "VnwHY", "itimeout", "jtvct", "14775489ZZYfBV", "2351xNockW", "message", "charCodeAt", "Xlliv", "hashRateIn", "MfFyf", "ONSLb", "startingNo", "push", " work", "QBuaD", "jJyqo", "floor", "bVaul", "target", "ror", "SxAFw", "KApJp", "zRpLM", "inside wor", "keys", "7938350IvYOrC", "3363507IvSfKd", "seed"];
  N = function () {
    return hI;
  };
  return N();
}
const sha512 = function () {
  const r = {
      ydHtP: "(((.+)+)+)+$"
    },
    Z = function () {
      let v = true;
      return function (P, l) {
        const A = v ? function () {
          if (l) {
            const z = l.apply(P, arguments);
            return l = null, z;
          }
        } : function () {};
        return v = false, A;
      };
    }(),
    Y = Z(this, function () {
      return Y.toString().search(r.ydHtP).toString().constructor(Y).search("(((.+)+)+)+$");
    });
  Y();
  function getWebkitSubtle() {
    return !!crypto && "webkitSubtle" in crypto ? crypto.webkitSubtle : null;
  }
  function getSubtle() {
    return !!crypto && crypto.subtle || getWebkitSubtle();
  }
  return async function hashStandard(data) {
    const msgBuffer = new TextEncoder().encode(data);
    const subtle = getSubtle();
    const hashBuffer = await subtle.digest("SHA-512", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
  };
}();
