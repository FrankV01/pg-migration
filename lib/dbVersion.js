/**
 * Represents a given version string in a comparable manor.
 *
 * @class
 * @author Frank Villasenor
 * @param strVersion dbVersion as a string. 1.0.0 or 1.0.0.1
 * @constructor
 */
function dbVersion(strVersion) {
  this.original = strVersion;
  const parsed = strVersion.match(/(\d+)\.(\d+)\.(\d+)\.*(\d*)/);
  this.debug = require('debug')('db-migration:dbVersion');

  this.parsed = Object.freeze({
    major: parseInt(parsed[1]),
    minor: parseInt(parsed[2]),
    revision: parseInt(parsed[3]),
    build: parseInt(parsed[4] || 0)
  });
  this.debug("parsed", this.parsed);
}

/**
 * Compares me against another dbVersion instance.
 * Equal: 0
 * this newer: 1
 * other newer: -1
 * @param other The other instance to compare against.
 * @returns {number} 0=Equals; 1=this newer; -1=other newer
 */
dbVersion.prototype.compare = function (other) {
  this.debug('other', other);
  if (typeof other !== 'object' && typeof other.parsed !== 'object') throw "Invalid input";

  try {
    if (this.amNewer(other)) return 1;
    if (other.amNewer(this)) return -1;
    return 0;
  } catch (er) {
    this.debug("Error in compare", er, parsed_version, other);
    throw er;
  }
};

/**
 * Is this instance newer (greater) than the given 'other' instance
 * @param other
 * @returns {boolean}
 */
dbVersion.prototype.amNewer = function (other) {
  if (this.parsed.major > other.parsed.major) return true;
  if (this.parsed.major < other.parsed.major) return false;

  if (this.parsed.minor > other.parsed.minor) return true;
  if (this.parsed.minor < other.parsed.minor) return false;

  if (this.parsed.revision > other.parsed.revision) return true;
  if (this.parsed.revision < other.parsed.revision) return false;

  if (this.parsed.build > other.parsed.build) return true;
  if (this.parsed.build < other.parsed.build) return false;

  return false; // Equal.

  //need to handle build
};


module.exports = dbVersion;
