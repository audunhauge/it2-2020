// @ts-check

const results = [];
const PASS = '<span style="color:green">PASSED</span> ';
const FAIL = '<span style="color:red">FAILED</span> ';
const MSG_ = '<span style="color:blue">';
const _MSG = '</span> ';

export class Test {
  constructor(fu, args) {
    this.fu = typeof fu === "function" ? fu(...args) : fu;
    this.name = fu.name || typeof fu;
    this.args = args;
    this.alive = true;
    this.msg = "";
    this.val = this.fu;
    if (typeof fu !== 'function') {
        this.name = this.args[0] || this.name;
        this.val = fu;
        this.args = '';
    }
  }

  get is() {
    this.msg += " is ";
    return this;
  }
  get it() {
    this.msg += ". It ";
    return this;
  }

  a(type) {
    if (!this.alive) return this;
    let me = this.val ? this.val : this.fu;
    let builder = me.constructor ? me.constructor.name : "";
    let mytype = builder || typeof me;
    if (mytype.toLowerCase() === type.toLowerCase()) {
      results.push(
        PASS + showArgs(this) + this.msg + " a " + type
      );
    } else {
      results.push(
        FAIL + showArgs(this) + this.msg + " not a " + type
        + ' it is a ' + mytype
      );
    }
  }

  get to() {
    return this;
  }

  // check if array includes some values
  includes(list) {
    if (!this.alive) return this;
    if (Array.isArray(this.val) && Array.isArray(list)) {
      const good = list.every(e => this.val.includes(e));
      if (good) {
        results.push(
          PASS + showArgs(this) + this.msg + " includes " + list
        );
      } else {
        results.push(
          FAIL + showArgs(this) + this.msg + " not includes " + list + " it is " + this.fu
        );
      }
    }
  }

  // top level equality for primitives,Array,Object
  be(val) {
    if (!this.alive) return this;
    if (this.name === "string") {
      results.push(MSG_ + this.fu + _MSG);
      return;
    }
    if (Array.isArray(this.val)) {
      if (val.length !== this.val.length) {
        results.push(
          FAIL + showArgs(this) + this.msg + " not equal " + val + " it is " + this.fu
        );
        return;
      }
      for (let i=0; i<val.length; i++) {
        if (this.val[i] !== val[i]) {
          results.push(
            FAIL + showArgs(this) + this.msg + " not equal " + val + " it is " + this.fu
          );
          return;
        }
      }
      results.push(
        PASS + showArgs(this) + this.msg + " equal " + val
      );
      return;
    }
    if (this.val && typeof this.val === "object") {
      const keys = Object.keys(val);
      if (keys.length !== Object.keys(this.val).length) {
        results.push(
          FAIL + showArgs(this) + this.msg + " not equal " + JSON.stringify(val) + " it is " + JSON.stringify(this.fu)
        );
        return;
      }
      for (const k of keys) {
        if (this.val[k] !== val[k]) {
          results.push(
            FAIL + showArgs(this) + this.msg + " not equal " + JSON.stringify(val) + " it is " + JSON.stringify(this.fu)
          );
          return;
        }
      }
      results.push(
        PASS + showArgs(this) + this.msg + " equal " + JSON.stringify(val)
      );
      return;
    }
    if (this.val !== null && this.val !== undefined && val !== undefined && this.val.toString() === val.toString()) {
      results.push(
        PASS + showArgs(this) + this.msg + " equal " + val
      );
      return;
    }
    if (this.fu === val || this.val === val) {
      results.push(
        PASS + showArgs(this) + this.msg + " equal " + val
      );
    } else {
      results.push(
        FAIL + showArgs(this) + this.msg + " not equal " + val + " it is " + this.fu
      );
    }
  }

  get defined() {
    if (!this.alive) return this;
    log(this.val !== undefined, this, "", ".defined");
  }

  eq(val) {
    return this.be(val);
  }

  looklike(val) {
    if (!this.alive) return this;
    log(this.fu == val || this.val == val, this, " looks like ", val);
  }

  approx(val, epsilon = Number.EPSILON) {
    if (!this.alive) return this;
    log(Math.abs(this.fu - val) < epsilon || this.val - val < epsilon, this, " ≃ ", " " + val + " ±" + epsilon);
  }

  gt(val) {
    if (!this.alive) return this;
    log(this.fu > val || this.val > val, this, " > ", val);
  }

  lt(val) {
    if (!this.alive) return this;
    log(this.fu < val || this.val < val, this, " < ", val);
  }

  have(values) {
    if (!this.alive) return this;
    let p, present, msg;
    if (typeof values === "string") {
      // sjekk om vi har .. expect(fu,1,2).to.have("cells.length").eq(12)
      // values er her "cells.length" - splitter på punktum
      let vlist = values.split(".");
      p = this.fu;
      msg = " has " + values;
      present = vlist.every(e => p[e] !== undefined ? (p = p[e], true) : false);
    } else {
      p = this.val[values];
      present = p !== undefined;
      msg = " has [" + values + "]";  // most likely a numeric index
    }
    if (present) {
      this.msg += msg;
      this.val = p;
      return this;
    } else {
      results.push(FAIL + showArgs(this) + " does not have " + values);
      this.alive = false;
      return this;
    }
  }

  static summary(selector = "body") {
    let div = document.createElement("div");
    div.innerHTML = results.map(e => "<div>" + e + "</div>").join("");
    let body = document.querySelector(selector);
    body.appendChild(div);
  }
}

function showArgs(o) {
  if (o.args)  return o.name + "(" + JSON.stringify(o.args) + ")";
  return o.name;
}


function log(test, obj, logick, val) {
  if (test) {
    results.push(
      PASS + showArgs(obj) + logick + obj.msg + val
    );
  } else {
    results.push(
      FAIL + showArgs(obj) + "!" + logick + obj.msg + val
    );
  }
}

export function expect(fu, ...args) {
  return new Test(fu, args);
}