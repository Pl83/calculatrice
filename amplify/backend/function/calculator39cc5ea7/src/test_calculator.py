from index import handler

def test_handler_add():
    event = {
        "a": 2,
        "b": 3,
        "operation": "add"
    }
    result = handler(event, None)
    assert result == 5
