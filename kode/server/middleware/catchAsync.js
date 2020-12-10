/**
 * Mellomvaren er hentet direkte fra Marius Wallins' 
 * forelesninger 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'. 
 */
export default (func) => (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };