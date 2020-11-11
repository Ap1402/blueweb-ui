const createAlert = (requestStatus) => {
  if (requestStatus.sent & !requestStatus.success) {
    return (
      <div class="alert alert-danger" role="alert">
        {requestStatus.message}
      </div>
    );
  }
  if (requestStatus.sent & requestStatus.success) {
    return (
      <div class="alert alert-success" role="alert">
        {requestStatus.message}
      </div>
    );
  }
};

export default createAlert;
